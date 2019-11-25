import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'
import * as firebase from 'firebase/app';
import 'firebase/storage';

class AnimalForm extends Component {
    state = {
        name: "",
        breed: "",
        photo: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        // below is the same as stateToChange.name
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
  
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.breed === "") {
            window.alert("Please input an animal name and breed");
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
                    const newAnimal = {
                        name: this.state.name,
                        breed: this.state.breed,
                        photo: url
                    }
                    return AnimalManager.post(newAnimal)
                    .then(() => this.props.history.push('/animals'));
                })
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
                                id="name"
                                placeholder="Animal name"
                            />
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="breed"
                                placeholder="Breed"
                            />
                            <label htmlFor="breed">Breed</label>
                            <input
                            type="file"
                            placeholder="Animal Photo"
                            onChange={(e) => this.setState({ photo: e.target.files[0] })}
                            />
                        <label>Student Photo</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewAnimal}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AnimalForm