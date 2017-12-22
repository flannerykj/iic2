import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import IngredientList from '../src/components/IngredientList'
import IngredientItem from '../src/components/IngredientItem'

const ingredients = [{
    id: 1,
    text: 'carrots'
  },
  {
    id: 2,
    text: 'onions'
  }];
const wrapper = shallow(<IngredientList ingredients={ingredients}/>);

describe('(Component) IngredientList', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
  it('renders an IngredientItem for each ingredient in props.ingredients', () => {
    expect(wrapper.find('IngredientItem')).to.have.length(ingredients.length);
    wrapper.find('IngredientItem').map((node, index) => {
      const ingredient = node.prop('ingredient');
      expect(ingredient).to.equal(ingredients[index]);
    });
  });

});
