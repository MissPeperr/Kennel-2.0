import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

    componentDidMount() {
        LocationManager.getAll()
            .then((locations) => {
                console.log("all locations", locations)
                this.setState({
                    locations: locations
                })
            })
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }

    render() {

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Create New Location
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location =>
                        <LocationCard
                            key={location.id}
                            location={location}
                            deleteLocation={this.deleteLocation}
                        />)}
                </div>
            </>
        )
    }
}

export default LocationList