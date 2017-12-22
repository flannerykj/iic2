
import React, { Component } from 'react';
import actions from '../actions';
import {connect} from 'react-redux';

import IngredientList from '../components/IngredientList';
import TextInput from '../components/TextInput';

class IngredientsContainer extends Component {
  handleAddIngredient = (ingredient) => {
    this.props.addIngredient(ingredient);
  }
  handleClearIngredients = () => {
    this.props.clearIngredients();
    this.props.resetCheck();
  }
  render() {
    return(
      <div>
        <h1>Ingredients</h1>
        <TextInput onSubmit={this.handleAddIngredient}/>
        <IngredientList ingredients={this.props.ingredients.items} onRemoveItem={this.props.removeIngredient}

        />

        <div className='field is-grouped'>
          <p className='control'>
            <button className='button'  onClick={this.handleClearIngredients}>Clear List</button>
          </p>
        </div>
      </div>
    )
  }
}
var mapStateToProps = function(store) {
  return {
    ingredients: store.ingredients,
    result: store.result
  }
}
var mapDispatchToProps = function(dispatch){
  return {
    addIngredient: function(ingredient){dispatch(actions.addIngredient(ingredient));},
    removeIngredient: function(id){dispatch(actions.removeIngredient(id)); },
    clearIngredients: function(){dispatch(actions.clearIngredients()); },
    resetCheck: function(){dispatch(actions.resetCheck()); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsContainer);
