import { SIGN_UP } from './actions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        email: action.payload.email,
      };
    default:
      return state;
  }
};
