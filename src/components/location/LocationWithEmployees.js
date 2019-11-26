import React, { Component } from 'react'
import LocationManager from '../../modules/LocationManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationWithEmployees extends Component {
    state = {
      location: {},
      employees: []
    }

    componentDidMount(){
        //got here now make call to get location with employees
        LocationManager.getWithEmployees(this.props.match.params.locationId)
            .then((response) => {
            this.setState({
              location: response,
              employees: response.employees
            })
        })
    }

    render(){
        return (
          <div className="card">
            <p>Location: {this.state.location.dogParkName}</p>
            {this.state.employees.map(employee =>
              <EmployeeCard
                key={employee.id}
                employee={employee}
                deleteEmployee={this.deleteEmployee}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default LocationWithEmployees;