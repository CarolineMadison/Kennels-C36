import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
          <h3><span className="card-petname">Carmen Sandiego</span></h3>
          <h3><span className="card-petname">Ms. Cat Lady</span></h3>
          <h3><span className="card-petname">Mr. Cat Man</span></h3>
          <h3><span className="card-petname">Sandiego Carmen</span></h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;