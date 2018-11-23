import React from 'react';
import { mount } from 'enzyme';

import Hello from '../Hello';


describe('Hello component', () => {
  const wrapper = mount(
    <Hello />,
  );

  it('Should have one div with text "Hello"', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').text()).toEqual('Hello');
  });
});
