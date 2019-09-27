import React, { Component } from 'react';

class LocationCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <div className="location">
                        <h3>West Nashville</h3>
                        <h3>500 Puppy Way</h3>
                        <h4>Nashville, TN</h4>
                    </div>
                    <div className="location">
                        <h3>East Nashville</h3>
                        <h3>500 Puppy Way</h3>
                        <h4>Nashville, TN</h4>
                    </div>
                    <div className="location">
                        <h3>South Nashville</h3>
                        <h3>500 Puppy Way</h3>
                        <h4>Nashville, TN</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationCard;