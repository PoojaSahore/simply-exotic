import React, { Component } from 'react'

class IngrediantList extends Component {
    displayItems() {
        let display = []
        this.props.recipe.items.map((item, i) => {
            display.push(<li key={i}>{item.quantity} - {item.ingrediant}</li>)
        })
        return display
    }
   

    render() {  //console.log(this.props.recipe.items)
        return (
            <div>
                <ul>
                    {this.displayItems()}
                </ul>
            </div>
        )
    }
}

export default IngrediantList