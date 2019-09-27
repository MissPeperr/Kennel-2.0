import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">Brenda Long</span></h3>
          <h3>Name: <span className="card-petname">Steve Brownlee</span></h3>
          <h3>Name: <span className="card-petname">Joe Shepherd</span></h3>
          <h3>Name: <span className="card-petname">Jisie David</span></h3>
          <h3>Name: <span className="card-petname">Adam Schaeffer</span></h3>
          <h3>Name: <span className="card-petname">Andy Collins</span></h3>
        </div>
      </div>
    );
  }
}

export default OwnerCard;