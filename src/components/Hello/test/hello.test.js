import React from 'react';
import { mount } from 'enzyme';

import Hello from '../Hello';


describe('Hello component should have one div with text "Hello"', () => {

  const wrapper = mount(
    <Hello />
  );

  it(`"onOpenedStateChange" should be called once`, () => {
   expect(wrapper.find('div')).toHaveLength(1);
   expect(wrapper.find('div').text()).toEqual('Hello');
  });
});
