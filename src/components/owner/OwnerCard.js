import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-petname">{this.props.owner.firstName} {this.props.owner.lastName}</span></h3>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Tell Them to Get Lost</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;