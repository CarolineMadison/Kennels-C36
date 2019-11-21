import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'
import * as firebase from 'firebase/app';
import 'firebase/storage';

class OwnerForm extends Component {
    state = {
        name: "",
        photo: null,
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
  
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.name === "") {
            window.alert("Please input a name");
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
                    const newOwner = {
                        name: this.state.name,
                        photo: url
                    }
                    return OwnerManager.post(newOwner)
                })
                .then(() => this.props.history.push('/owners'));
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
                                placeholder="Name"
                            />
                            <label htmlFor="name">Name</label>
                            <input
                            type="file"
                            placeholder="Owner Photo"
                            onChange={(e) => this.setState({ photo: e.target.files[0] })}
                            />
                        <label>Owner Photo</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm;