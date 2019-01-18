import React from 'react';
import { mount } from 'enzyme';
import AuthFormContainer from './AuthFormContainer';

describe('AuthFormContainer', () => {
  const defaultProps = {
    onSubmit: () => Promise.resolve(false),
    submitButtonText: '',
    validate: () => false,
  };

  let wrapper;
  let props;

  beforeEach(() => {
    wrapper = mount(<AuthFormContainer {...defaultProps} {...props} />);
  });

  describe('when rendered initialy', () => {
    it('"email" field should be empty', () => {
      expect(wrapper.find('div[data-auth-form-text-field="email"]').find('input').props().value).toBe('');
    });

    it('"password" field should be empty', () => {
      expect(wrapper.find('div[data-auth-form-text-field="password"]').find('input').props().value).toBe('');
    });
  });

  describe('when form is invalid', () => {
    beforeAll(() => {
      props = {
        ...defaultProps,
        validate: () => false,
      };
    });

    it('the button should be disabled', () => {
      expect(wrapper.find('button').props().disabled).toBe(true);
    });

    describe('when button is clicked', () => {
      beforeAll(() => {
        props = {
          ...props,
          onSubmit: jest.fn(),
        };
      });

      beforeEach(() => {
        wrapper.find('button').simulate('click');
      });

      it('button click shouldn\'t invoke onSubmit handler function', () => {
        expect(props.onSubmit).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe('when form is valid', () => {
    beforeAll(() => {
      props = {
        ...defaultProps,
        validate: () => true,
      };
    });

    it('the button should be enabled', () => {
      expect(wrapper.find('button').props().disabled).toBe(false);
    });

    describe('when button is clicked', () => {
      beforeAll(() => {
        props = {
          ...props,
          onSubmit: jest.fn(),
        };
      });

      beforeEach(() => {
        wrapper.find('button').simulate('click');
      });

      it('button click should invoke onSubmit handler function', () => {
        expect(props.onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
