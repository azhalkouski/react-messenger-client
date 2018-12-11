import {
  SIGN_UP,
  SIGN_IN,
} from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return {
        email: action.payload.email,
      };
    default:
      return state;
  }
};
