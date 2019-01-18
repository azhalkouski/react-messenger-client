const api = {

  auth: {
    signIn: (email, password) => fetch('/api/v1/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json()),

    createUser: (email, password) => fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json()),
  },

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
    })
      .then(response => response.json()),
  },

  createChat: {
    byEmail: ({ email }) => fetch('/api/v1/chatsByEmail', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json()),
  },

};

api.initialize = (store) => {
  api.store = store;
};


export default api;
