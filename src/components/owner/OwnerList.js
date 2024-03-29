import React, { Component } from 'react'
//import the components we will need
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
  //define what this component needs to render
  state = {
    owners: [],
  }

  componentDidMount() {
    // console.log("Owner LIST: ComponentDidMount");
    //getAll from LocationManager and hang on to that data; put it in state
    OwnerManager.getAllOwners()
      .then((owners) => {
        this.setState({
          owners: owners
        })
      })
  }

  deleteOwner = id => {
    OwnerManager.deleteOwner(id)
      .then(() => {
        OwnerManager.getAllOwners()
          .then((newOwners) => {
            this.setState({
              owners: newOwners
            })
          })
      })
  }

  render() {
    return (
      <>
        <section className="section-content">
          <button type="button"
            className="btn"
            onClick={() => { this.props.history.push("/owners/new") }}>
            Add A New Owner
          </button>
        </section>
        <div className="container-cards">
          {this.state.owners.map(owner =>
            <OwnerCard
              key={owner.id}
              owner={owner}
              deleteOwner={this.deleteOwner}
            />
          )}
        </div>
      </>
    )
  }
}

export default OwnerList