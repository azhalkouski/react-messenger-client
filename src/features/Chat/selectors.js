/* eslint import/prefer-default-export: 0 */
import { getItems } from '../../modules/data';

export const getChatMessages = state => getItems(state, 'messages', state.chat.messageIds);
