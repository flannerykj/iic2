import React, { Component } from 'react';

class IngredientItem extends Component {
  render() {
    const {ingredient} = this.props;
    return(
      <tr className='list-item'>
        <td className='item-text'>{ingredient.text}</td>
        <td><button className='delete is-medium remove-item' onClick={() => this.props.onRemove(ingredient.id)}></button></td>
      </tr>
    )
  }
}

export default IngredientItem;
