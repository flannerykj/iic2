import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import TextInput from '../src/components/Navbar'

const wrapper = shallow(<TextInput/>);

describe('(Component) TextInput', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
