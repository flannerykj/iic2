var shortid = require('shortid');

export default {
  addIngredient: function(ingredient){
    return {
      type: 'ADD_INGREDIENT',
      ingredient: Object.assign({}, {id: shortid.generate()}, ingredient)
    }
  },
  removeIngredient: function(id){
    return {
      type: 'REMOVE_INGREDIENT',
      id: id
    }
  },
  clearIngredients: function(){
    return {
      type: 'CLEAR_INGREDIENTS'
    }
  },
  runCheck: function(){
    return {
      type: 'RUN_CHECK'
    }
  },
  resetCheck: function(){
    return {
      type: 'RESET_CHECK'
    }
  }
}

