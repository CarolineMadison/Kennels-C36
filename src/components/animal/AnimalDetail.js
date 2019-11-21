import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        photo: "",
        // because the data isn't there and is still loading, set loadingStatus to true so the delete button is disabled
        loadingStatus: true
    }

    componentDidMount() {
        // console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        AnimalManager.get(this.props.animalId)
            .then((animal) => {
                this.setState({
                    name: animal.name,
                    breed: animal.breed,
                    photo: animal.photo,
                    // because the data is there and no longer loading, the delete button is enabled
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        AnimalManager.delete(this.props.animalId)
        .then(() => this.props.history.push("/animals"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Name: <b>{this.state.name}</b></h3>
                    <img src={this.state.photo} alt="Dog" />
                    <p>Breed: {this.state.breed}</p>
                    {/* disabled === true when component renders because data isn't there */}
                    <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
                </div>
            </div>
        );
    }
}

export default AnimalDetail;