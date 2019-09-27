import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">Madi Peper</span></h3>
          <h3>Name: <span className="card-petname">Bryan Neilson</span></h3>
          <h3>Name: <span className="card-petname">Mo Silvera</span></h3>
          <h3>Name: <span className="card-petname">Kisten Norris</span></h3>
          <h3>Name: <span className="card-petname">Leah Gwin</span></h3>
          <h3>Name: <span className="card-petname">Jenna Solis</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;