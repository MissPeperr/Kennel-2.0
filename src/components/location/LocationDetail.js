import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
        city: "",
        state: ""
    }

    componentDidMount() {
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    address: location.address,
                    city: location.city,
                    state: location.state
                });
            });
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="location">
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.address}</h3>
                        <h4>{this.state.city} {this.state.state}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationDetail;