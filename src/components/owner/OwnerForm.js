import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import '../animal/AnimalForm.css'

class OwnerForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.firstName === "" || this.state.lastName === "") {
            window.alert("Please fill out the form completely");
        } else {
            this.setState({ loadingStatus: true });
            const owner = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            };

            OwnerManager.post(owner)
                .then(() => this.props.history.push("/owners"));
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
                                id="firstName"
                                placeholder="First Name"
                            />
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="lastName"
                                placeholder="Last Name"
                            />
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm