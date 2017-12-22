import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import Results from '../src/components/Results'

const wrapper = shallow(<Results/>);

describe('(Component) Results', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
