import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Navbar from '../src/components/Navbar'

const wrapper = shallow(<Navbar/>);

describe('(Component) Navbar', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
