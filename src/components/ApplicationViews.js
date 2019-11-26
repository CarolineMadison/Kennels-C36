import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeForm from './employee/EmployeeForm'
import LocationForm from './location/LocationForm'
import OwnerForm from './owner/OwnerForm'
import Login from "./authentication/Login"
import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>

                <Route path="/login" render={(props) => {
                    return <Login setUser={this.props.setUser} {...props} />
                }} />

                <Route exact path="/animals" render={props => {
                    if (this.props.user) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/" render={(props) => {
                    // if (this.props.user) {
                        return <Home {...props} />
                    // } else {
                    //     return <Redirect to="/login" />
                    // }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // passed from react-router-dom to animal detail component
                    // kind of the same as EVENT.target.value (Vanilla javaScript)
                    console.log("Props from react-router-dom", props)
                    console.log("This component's props", this.props)
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail
                        animalId={parseInt(props.match.params.animalId)}
                        // history={props.history}
                        // match={props.match}
                        // location={props.location}
                        // above is the same as key value pairs on props (below) from react-router-dom and passes it as props to animal detail
                        {...props}
                    />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} />
                    }}
                />
                <Route exact path="/locations" render={(props) => {
                    // if (this.props.user) {
                        return <LocationList {...props} />
                    // } else {
                    //     return <Redirect to="/login" />
                    // }
                }} /> 
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)}
                        {...props}
                    />
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    if (this.props.user) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                {/* Notice that we are passing {...props} to enable access to react-router-dom properties */}
                <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals employeeId={parseInt(props.match.params.employeeId)} {...props} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    if (this.props.user) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews