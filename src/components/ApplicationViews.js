import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'

class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
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
                <Route exact path="/locations" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)}
                    {...props} 
                    />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews