import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationDetail extends Component {

    state = {
        name: "",
        address: "",
        city: "",
        state: "",
        loadingStatus: true
    }

    componentDidMount() {
        LocationManager.get(this.props.locationId)
            .then((location) => {
                this.setState({
                    name: location.name,
                    address: location.address,
                    city: location.city,
                    state: location.state,
                    loadingStatus: false
                });
            });
    }

    handleDelete = () => {
        this.setState({loadingStatus: true})
        LocationManager.delete(this.props.locationId)
        .then(() => this.props.history.push("/locations"))
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="location">
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.address}</h3>
                        <h4>{this.state.city} {this.state.state}</h4>
                        <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationDetail;