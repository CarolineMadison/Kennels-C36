import React, { Component } from 'react';
import "./location.css"

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img className="map-image" src={require("./woodenMap.jpg")} alt="Wooden Puzzle USA" />
          </picture>
          <h3><span className="card-cityName">Nashville</span></h3>
          <h3><span className="card-cityName">Seattle</span></h3>
          <h3><span className="card-cityName">Denver</span></h3>
          <h3><span className="card-cityName">Portland</span></h3>
          
        </div>
      </div>
    );
  }
}

export default LocationCard;

// /Users/caroline/workspace/kennels/src/images/woodenMap.jpg

