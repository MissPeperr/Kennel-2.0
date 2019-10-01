import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import '../animal/AnimalForm.css'

class LocationForm extends Component {
    state = {
        name: "",
        address: "",
        city: "",
        state: "",
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewLocaiton = evt => {
        evt.preventDefault();
        if (this.state.name === "" || this.state.address === "" || this.state.city === "" || this.state.state === "") {
            window.alert("Please fill out the form completely");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state
            };

            LocationManager.post(location)
                .then(() => this.props.history.push("/locations"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="Name of Location"
                            />
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="address"
                                placeholder="Address"
                            />
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="city"
                                placeholder="City"
                            />
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="state"
                                placeholder="State"
                            />
                            <label htmlFor="state">State</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm