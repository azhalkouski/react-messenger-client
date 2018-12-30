import keyBy from 'lodash/keyBy';
import { PUSH_ITEM, PUSH_ITEMS } from './actions';

export default (state = {}, action) => {
  if (action.type.startsWith(PUSH_ITEMS)) {
    return {
      ...state,
      [action.meta.collection]: {
        ...state[action.meta.collection],
        ...keyBy(action.payload, '_id'),
      },
    };
  }

  if (action.type.startsWith(PUSH_ITEM)) {
    return {
      ...state,
      [action.meta.collection]: {
        ...state[action.meta.collection],
        [action.payload._id]: action.payload,
      },
    };
  }

  return state;
};
