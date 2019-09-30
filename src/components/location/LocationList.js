import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    state = {
        locations: [],
    }

componentDidMount(){
    LocationManager.getAll()
    .then((locations) => {
        console.log("all locations", locations)
        this.setState({
            locations: locations
        })
    })
}

render(){
    console.log("ANIMAL LIST: Render");

    return(
        <div className="container-cards">
            {this.state.locations.map(location => <LocationCard key={location.id} location={location}/>)}
        </div>
    )
}
}

export default LocationList