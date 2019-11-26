import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
  //define what this component needs to render
  state = {
    locations: [],
  }

  componentDidMount() {
    //getAllLocations from LocationManager and hang on to that data; put it in state
    LocationManager.getAllLocations()
      .then((locations) => {
        this.setState({
          locations: locations
        })
      })
  }

  deleteLocation = id => {
    LocationManager.deleteLocation(id)
      .then(() => {
        LocationManager.getAllLocations()
          .then((newLocations) => {
            this.setState({
              locations: newLocations
            })
          })
      })
  }

  render() {
    console.log("LocationList: Render");

    return (
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/locations/new") }}>
            Add A New Location
          </button>
        </section>
        <div className="container-cards">
          {this.state.locations.map(location =>
            <LocationCard
              key={location.id}
              location={location}
              deleteLocation={this.deleteLocation}
              // need to pass props so that the details button on location card will render employee information
              // {...this.props}
            />
          )}
        </div>
      </>
    )
  }
}

export default LocationList