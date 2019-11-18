import React, { Component } from 'react';
import "./location.css"

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <img className="dogPark-image" src={require("./nashvilleDogPark.jpg")} alt="Nashville Dog Park" />  
          <h3><span className="card-cityName">Nashville</span></h3>
          <img className="dogPark-image" src={require("./seattleDogPark.png")} alt="Seattle Dog Park" />
          <h3><span className="card-cityName">Seattle</span></h3>
          <img className="dogPark-image" src={require("./denverDogPark.jpg")} alt="Denver Dog Park" />
          <h3><span className="card-cityName">Denver</span></h3>
          <img className="dogPark-image" src={require("./portlandDogPark.jpg")} alt="Portland Dog Park" />
          <h3><span className="card-cityName">Portland</span></h3>
          
        </div>
      </div>
    );
  }
}

export default LocationCard;

// /Users/caroline/workspace/kennels/src/images/woodenMap.jpg

