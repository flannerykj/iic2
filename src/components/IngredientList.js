import React, { Component } from 'react';
import IngredientItem from './IngredientItem';

class IngredientList extends Component {
  render() {
    return(
      <table className='table'>
        <tbody>
        {this.props.ingredients.map((item, i) => (
          <IngredientItem
            key={i}
            ingredient={item}
            onRemove={this.props.onRemoveItem}/>
        ))}
      </tbody>
    </table>
    )
  }
}

export default IngredientList;
