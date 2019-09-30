import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager'

class OwnerList extends Component {
    state = {
        owners: [],
    }

    componentDidMount() {
        OwnerManager.getAll()
            .then((owners) => {
                console.log("all owners", owners)
                this.setState({
                    owners: owners
                })
            })
    }

    deleteOwner = id => {
        OwnerManager.delete(id)
            .then(() => {
                OwnerManager.getAll()
                    .then((newOwners) => {
                        this.setState({
                            owners: newOwners
                        })
                    })
            })
    }

    render() {

        return (
            <div className="container-cards">
                {this.state.owners.map(owner =>
                    <OwnerCard
                        key={owner.id}
                        owner={owner}
                        deleteOwner={this.deleteOwner}
                    />)}
            </div>
        )
    }
}

export default OwnerList