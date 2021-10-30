import React, { Component } from 'react'

export default class Person extends Component {
    

    render() {
        return (
            <div >
                <hr />
                <button onClick={this.props.remove}>Delete</button>
                <h3>Id:{this.props.id} </h3>
                <h3>Name:{this.props.name} </h3>
                <h3>Age:{this.props.age} </h3>
                <hr />
            </div>
        )
    }
}
