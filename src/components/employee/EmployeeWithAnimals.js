// This component will accept props and return the employee name and then map over the animals returning <AnimalCard> for only the pets the employee is responsible for.

import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalCard from '../animal/AnimalCard'
import AnimalManager from '../../modules/AnimalManager'

class EmployeeWithAnimals extends Component {
    // set the state of employee object for one employee and the animals array to include animals with matching employeeId for that employee
    state = {
      employee: {},
      animals: []
    }

    componentDidMount(){
        //got here now make call to get employee with animal
        EmployeeManager.getWithAnimals(this.props.match.params.employeeId)
            .then((results) => {
            this.setState({
              employee: results,
              animals: results.animals
            })
        })
    }

    deleteAnimal = id => {
      AnimalManager.delete(id)
        .then(() => {
          AnimalManager.getAll()
            .then((newAnimals) => {
              this.setState({
                animals: newAnimals
              })
            })
        })
    }

    render(){
        return (
          <div className="card">
            <p>Employee: {this.state.employee.name}</p>
            {/* gets animals associated with the employee and renders a card for each one, passes props */}
            {this.state.animals.map(animal =>
              <AnimalCard
                key={animal.id}
                animal={animal}
                deleteAnimal={this.deleteAnimal}
                {...this.props}
              />
            )}
          </div>
        )
      }
    }

export default EmployeeWithAnimals;