import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'

class EmployeeList extends Component {
    state = {
        employees: [],
    }

componentDidMount(){
    console.log("employee mounted")
    EmployeeManager.getAll()
    .then((employees) => {
        console.log("all employees", employees)
        this.setState({
            employees: employees
        })
    })
}

render(){
console.log("employee render")
    return(
        <div className="container-cards">
            {this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
        </div>
    )
}
}

export default EmployeeList