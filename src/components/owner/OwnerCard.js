import React, { Component } from 'react'
import '../animal/animal.css'

class OwnerCard extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3><b>{this.props.owner.name}</b></h3>
          <img src={this.props.owner.photo} alt="Owner"/>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Get Outta Here</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;