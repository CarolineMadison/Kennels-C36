import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3><span className="card-petname">Paddington Bear</span></h3>
          <h3><span className="card-petname">Harry Potter</span></h3>
          <h3><span className="card-petname">Lego Batman</span></h3>
          <h3><span className="card-petname">Spiderman</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;