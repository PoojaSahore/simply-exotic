import React, { Component } from 'react'

class Ingredients extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.addIngredients = this.addIngredients.bind(this)
    }

    addIngredients() {console.log(this)
        //console.log(this.ingredient.value, this.quantity.value)
        if(this.ingredient.value == '' || this.quantity.value == '')
            alert("add items")
        else
            this.props.addIngrediants(this.ingredient.value, this.quantity.value)
        this.quantity.value = ""
        this.ingredient.value = ""
    }

    render() {
        return (
            <div className="inline-form form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="text" id="quantity" 
                ref={(input) => {this.quantity = input}} />
        
                <label htmlFor="ingredient">Ingredient
                <input type="text" id="ingredient"
                ref={(input) => {this.ingredient = input}} /> 
                </label>
                <button type="button" className="btn btn-info" onClick={this.addIngredients}>Add</button>
            </div>
        )
    }
}

export default Ingredients