import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from './actions';

const initialState = {
  userIds: [],
  fetchUsersError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        userIds: action.payload.map(user => user._id),
      };
    case FETCH_USERS_ERROR:
      return {
        ...state,
        fetchUsersError: action.payload,
      };
    default:
      return state;
  }
};
