import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/locations" render={(props) => {
                    return <LocationList />
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

// Modify ApplicationViews.js route for animals to load the <AnimalList /> instead of <AnimalCard />.

// Also, update the import statement. You will need the AnimalList instead of the AnimalCard.