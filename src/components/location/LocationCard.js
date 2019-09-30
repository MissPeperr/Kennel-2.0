import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="location">
                        <h3>{this.props.location.name}</h3>
                        <h3>{this.props.location.address}</h3>
                        <h4>{this.props.location.city} {this.props.location.state}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationCard;