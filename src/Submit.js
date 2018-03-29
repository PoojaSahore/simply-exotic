import React, { Component } from 'react'
import Ingredients from './Ingredients'
import IngrediantList from './IngrediantList'

class Submit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newRecipe: {
                name: '',
                description: '',
                items: []
            }
        }
        this.submitRecipe = this.submitRecipe.bind(this)
    }

    addIngrediants(ingrediant, quantity) { 
        //console.log("added ingre submit.js", quantity, ingrediant)
        let newRecipe = this.state.newRecipe
        newRecipe.items.push({quantity, ingrediant})
        this.setState({newRecipe})
        console.log(this.state, this.state.newRecipe)   
    }

    submitRecipe() {
        this.props.history.push('/')
        console.log(this.name.value, this.description.value)
        let newRecipe = this.state.newRecipe
        newRecipe.name = this.name.value
        newRecipe.description = this.description.value
        this.setState({newRecipe})
        console.log(newRecipe)

    }
    
    render() {         console.log(this.state, this.state.newRecipe)
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Submit a recipe</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="name of the recipe" 
                            ref={(input) => {this.name = input}} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" placeholder="enter a brief description" 
                            ref={(input) => {this.description = input}} />
                        </div>
                        <IngrediantList recipe={this.state.newRecipe}/>
                        <Ingredients addIngrediants={this.addIngrediants.bind(this)}/>
                        <button type="submit" className="btn btn-default" onClick={this.submitRecipe} >Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Submit