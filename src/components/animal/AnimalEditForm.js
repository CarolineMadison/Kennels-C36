import React, { Component } from "react"
import AnimalManager from "../../modules/AnimalManager"
import "./AnimalForm.css"
import EmployeeManager from "../../modules/EmployeeManager";

class AnimalEditForm extends Component {
  //set the initial state
  state = {
    name: "",
    breed: "",
    photo: null,
    employeeId: "",
    loadingStatus: true,
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingAnimal = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedAnimal = {
      id: this.props.match.params.animalId,
      name: this.state.name,
      photo: this.state.photo,
      breed: this.state.breed,
      employeeId: Number(this.state.employeeId)
    };

    AnimalManager.update(editedAnimal)
      .then(() => this.props.history.push("/animals"))
  }
  // the form renders but you want to prepopulate the input fields with the animal editing...gotes to get the single animal
  componentDidMount() {
    AnimalManager.get(this.props.match.params.animalId)
      .then(animal => {
        this.setState({
          name: animal.name,
          breed: animal.breed,
          photo: animal.photo,
          employeeId: animal.employeeId,
          loadingStatus: false,
        });
      });
      EmployeeManager.getAll()
      .then(employees => this.setState({employees: employees}))
  }

  render() {
    console.log(this.state)
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="name"
                value={this.state.name}
              />
              <label htmlFor="animalName">Animal name</label>

            </div>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="breed"
              value={this.state.breed}
            />
            <label htmlFor="breed">Breed</label>
            <select
              className="form-control"
              id="employeeId"
              value={this.state.employeeId}
              onChange={this.handleFieldChange}
            >
              {this.state.employees.map(employee =>
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              )}
            </select>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default AnimalEditForm