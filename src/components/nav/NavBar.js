import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push("/");
  }

  render(){
    return (
      <header>
      <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
      </h1>
      <nav>
          <ul className="container">
          <li><Link className="nav-link" to="/">Home</Link></li>
          {(this.props.user) ?
              <li><Link className="nav-link" to="/animals">Animals</Link></li>
          : null }
          {(this.props.user) ? 
              <li><Link className="nav-link" to="/employees">Employees</Link></li>
          : null }
          {(this.props.user) ? 
              <li><Link className="nav-link" to="/owners">Owners</Link></li>
          : null }
          <li><Link className="nav-link" to="/locations">Locations</Link></li>
          : <li><Link className="nav-link" to="/login">Login</Link></li>
          </ul>
      </nav>
      </header>
    )
  }
}

export default withRouter(NavBar);