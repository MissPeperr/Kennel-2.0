import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="location">
                        <h3>{this.props.location.name}</h3>
                        <h3>{this.props.location.address}</h3>
                        <h4>{this.props.location.city} {this.props.location.state}</h4>
                        <Link to={`/locations/${this.props.location.id}`}><button>Details</button></Link>
                        <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close Location</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationCard;