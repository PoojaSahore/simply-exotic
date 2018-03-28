import React, { Component } from 'react'

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state ={}
        this.submitRecipe = this.submitRecipe.bind(this)
    }

    submitRecipe() {
        this.props.history.push('/')
        console.log("clicked")
    }
    render() {
        return (
            <button onClick={this.submitRecipe}>Submit</button>
        )
    }
}

export default Submit