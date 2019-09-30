import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          {
            this.props.animal.breed === "Pitbull" ? <p>BEST BREED EVER. SO SWEET.</p> : <p>Breed: {this.props.animal.breed}</p>
          }
        </div>
      </div>
    );
  }
}

export default AnimalCard;