import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'
import * as firebase from 'firebase/app';
import 'firebase/storage';

class LocationForm extends Component {
    state = {
        city: "",
        dogParkName: "",
        photo: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
  
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.city === "" || this.state.dogParkName === "") {
            window.alert("Please input a city and dog park name");
        } else {
            this.setState({ loadingStatus: true });
            // step 1: save Image to Firebase
            const imagesRef = firebase.storage().ref('images');
            const childRef = imagesRef.child(`${this.state.name}-${Date.now()}`);
            childRef.put(this.state.photo)
                // step 2: get url from firebase
                .then(response => response.ref.getDownloadURL())
                // step 3: save everything to json server
                .then(url => {
                    const newLocation = {
                        city: this.state.city,
                        dogParkName: this.state.dogParkName,
                        photo: url
                    }
                    return LocationManager.post(newLocation)
                })
                .then(() => this.props.history.push('/locations'));
        }
    }

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="city"
                                placeholder="Dog Park City Location"
                            />
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="dogParkName"
                                placeholder="Park Name"
                            />
                            <label htmlFor="dogParkName">Dog Park Name</label>
                            <input
                            type="file"
                            placeholder="Park Photo"
                            onChange={(e) => this.setState({ photo: e.target.files[0] })}
                            />
                        <label>Dog Park Photo</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm;