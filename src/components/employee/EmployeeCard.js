import React, { Component } from 'react';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.employee.firstName} {this.props.employee.lastName}</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;