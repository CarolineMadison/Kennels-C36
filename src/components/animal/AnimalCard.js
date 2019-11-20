import React, { Component } from 'react'
import './animal.css'

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.animal.name}</b></h3>
          <img src={this.props.animal.photo} alt="Dog"/>
          <p>Breed: {this.props.animal.breed}</p>
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;

