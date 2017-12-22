import {combineReducers} from 'redux';
import initialStore from "../initialStore";


const ingredientsReducer = (currentState, action) => {
  switch(action.type){
    case 'ADD_INGREDIENT':
      return Object.assign({}, currentState, {
        items: [...currentState.items, action.ingredient]
      });
    case 'CLEAR_INGREDIENTS':
      return Object.assign({},currentState,{
        items: []
      });
    case 'REMOVE_INGREDIENT':
      const items = currentState.items.filter((item) => (item.id != action.id));
      return Object.assign({},currentState,{
        items: items
      });
    default:
      return currentState || initialStore.ingredients;
	}
};
const resultReducer = (currentState, action) => {
  switch(action.type){
    case 'RUN_CHECK':
      return Object.assign({},currentState,{
        isActive: true
      });
    case 'RESET_CHECK':
      return Object.assign({},currentState,{
        checks: [],
        isActive: false
      });
    default:
      return currentState || initialStore.ingredients;
	}
};



const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  result: resultReducer
});

export default rootReducer;

