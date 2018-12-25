/* eslint import/prefer-default-export: 0 */
import { getItems } from '../../modules/data';

export const getChats = state => getItems(state, 'chats', state.messenger.chatIds);
