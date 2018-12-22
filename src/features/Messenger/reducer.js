import { FETCH_CHATS_SUCCESS } from './actions';

const initialState = {
  chats: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload,
      };
    default:
      return state;
  }
};
