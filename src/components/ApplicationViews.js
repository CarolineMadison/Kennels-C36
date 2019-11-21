// import { Route } from 'react-router-dom'
import { Route, withRouter, Redirect } from "react-router-dom"
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
// import Login from './auth/Login'

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} /> 
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}/>
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
                <Route exact path="/locations" render={(props) => {
                    return <LocationList {...props}/>
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
                    return <EmployeeList {...props}/>
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList {...props}/>
                }} />
                 <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews