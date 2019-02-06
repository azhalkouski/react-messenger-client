/* eslint import/prefer-default-export: 0 */

import { getItems } from '../../modules/data';

export const getUsers = state => getItems(state, 'users', state.createChat.userIds);
