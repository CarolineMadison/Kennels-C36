import React, { Component } from 'react'
import '../animal/animal.css'

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3><b>{this.props.oneLocation.dogParkName}</b></h3>
          <img src={this.props.oneLocation.photo} alt="Dog Park" />
          <p>city: {this.props.oneLocation.city}</p>
          {/* <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link> */}
          <button type="button"
            onClick={() => { this.props.history.push(`/locations/${this.props.oneLocation.id}/details`) }}>Details</button>
          <button type="button" onClick={() => { this.props.history.push(`/locations/${this.props.oneLocation.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.oneLocation.id)}>Close Location</button>
        </div>
      </div> 
    );
  }
}

export default LocationCard;