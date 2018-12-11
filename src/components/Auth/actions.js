// action types
export const SIGN_UP = 'auth/SIGN_UP';
export const SIGN_UP_LOADING = 'auth/SIGN_UP_LOADING';
export const SIGN_UP_SUCCESS = 'auth/SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'auth/SIGN_UP_ERROR';

// action creaters
export const signUp = (email, password) => ({ type: SIGN_UP, payload: { email, password } });
export const signUpLoading = () => ({ type: SIGN_UP_LOADING });
export const signUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });
export const signUpError = error => ({ type: SIGN_UP_ERROR, payload: error });
