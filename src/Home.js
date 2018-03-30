import React, { Component } from 'react'
import IngrediantList from './IngrediantList'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipes: JSON.parse(localStorage.getItem('recipes')) || []
        }
    }

    displayRecipes() {
        let display = []
        this.state.recipes.map((recipe, i) => {
            display.push(
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src={recipe.image} />
                        <div className="caption">
                            <h3>{recipe.name}</h3>
                            <p>{recipe.description}</p>
                            <IngrediantList recipe={recipe} />
                        </div>
                    </div>
                </div>
            )
        })
        return display
    }

    render() {
        return (
            <div className="row">
                {this.displayRecipes()}
            </div>
        )
    }
}

export default Home