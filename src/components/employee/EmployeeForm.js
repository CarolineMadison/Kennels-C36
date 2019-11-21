import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'
import * as firebase from 'firebase/app';
import 'firebase/storage';

class EmployeeForm extends Component {
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
  
    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.name === "") {
            window.alert("Please input an employee name");
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
                    const newEmployee = {
                        name: this.state.name,
                        photo: url
                    }
                    return EmployeeManager.post(newEmployee)
                })
                .then(() => this.props.history.push('/employees'));
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
                                placeholder="Employee name"
                            />
                            <label htmlFor="name">Name</label>
                            <input
                            type="file"
                            placeholder="Employee Photo"
                            onChange={(e) => this.setState({ photo: e.target.files[0] })}
                            />
                        <label>Student Photo</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm