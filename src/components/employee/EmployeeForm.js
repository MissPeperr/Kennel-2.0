import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import '../animal/AnimalForm.css'

class EmployeeForm extends Component {
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

    constructNewEmployee = evt => {
        evt.preventDefault();
        if (this.state.firstName === "" || this.state.lastName === "") {
            window.alert("Please fill out the form completely");
        } else {
            this.setState({ loadingStatus: true });
            const employee = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
            };

            EmployeeManager.post(employee)
                .then(() => this.props.history.push("/employees"));
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
                                onClick={this.constructNewEmployee}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeForm