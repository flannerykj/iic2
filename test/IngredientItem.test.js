import React from 'react'
import { shallow, mount } from 'enzyme'
import {expect} from 'chai'
import IngredientItem from '../src/components/IngredientItem';
import sinon from 'sinon';

const ingredient = { id: 1, text: "carrots" };
const wrapper = shallow(<IngredientItem ingredient={ingredient} />);

describe('(Component) IngredientItem', () => {
  it('has .list-item css class', () => {
    expect(wrapper.hasClass('list-item')).to.equal(true);
  });
  it('should display ingredient text', () => {
    expect(wrapper.find('.item-text').text()).to.equal('carrots');
  });
  it('should have button to remove', () => {
    expect(wrapper.find('.list-item button').hasClass('remove-item'));
  });
});
