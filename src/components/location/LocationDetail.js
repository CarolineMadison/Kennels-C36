import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';


class LocationDetail extends Component {

    state = {
        city: "",
        dogParkName: "",
        photo: "",
        loadingStatus: true
    }

    componentDidMount() {
        // console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to the data; put it into state
        LocationManager.getLocation(this.props.locationId)
            .then((location) => {
                this.setState({
                    city: location.city,
                    dogParkName: location.dogParkName,
                    photo: location.photo,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        this.setState({loadingStatus: true})
        LocationManager.deleteLocation(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h3>Dog Park: <b>{this.state.dogParkName}</b></h3>
                    <img src={this.state.photo} alt="Dog Park" />
                    <p>: {this.state.city}</p>
                </div>
                <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
            </div>
        );
    }
}

export default LocationDetail;