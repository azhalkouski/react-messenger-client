import {
  SIGN_IN_LOADING,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
} from './actions';

const initialState = {
  user: {},
  signInError: {},
  signUpError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_LOADING:
      return {
        ...state,
        signInError: {},
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signInError: {},
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        signInError: action.payload,
      };
    case SIGN_UP_LOADING:
      return {
        ...state,
        signInError: {},
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        signUpError: {},
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpError: action.payload,
      };
    default:
      return state;
  }
};
