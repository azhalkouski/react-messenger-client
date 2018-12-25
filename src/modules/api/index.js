const api = {

  messenger: {
    getChats: () => fetch('/api/v1/chats', {
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      },
    })
      .then(response => response.json()),
  },

  chat: {
    getChatMessages: chatId => fetch(`/api/v1/chats/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      },
    })
      .then(response => response.json()),

    postChatMessage: ({ chatId, text }) => fetch(`/api/v1/chats/${chatId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
        'Content-Type': 'application/json',
      },
    }),
  },

};

api.initialize = (store) => {
  api.store = store;
};


export default api;
