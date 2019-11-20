import React, { Component } from 'react'
import '../animal/animal.css'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3><b>{this.props.location.dogParkName}</b></h3>
          <img src={this.props.location.photo} alt="Dog Park"/>
          <p>city: {this.props.location.city}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;



