const handleResponse = response =>
  response.json()
    .then((data) => {
      if (response.status >= 200 && response.status < 300) {
        return data;
      }

      return Promise.reject(data);
    });

const fetchWithHandler = (url, options) =>
  fetch(url, options)
    .then(handleResponse);

const api = {

  auth: {
    signIn: (email, password) => fetchWithHandler('/api/v1/auth', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }),

    createUser: (email, password) => fetchWithHandler('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  },

  messenger: {
    getChats: () => fetchWithHandler('/api/v1/chats', {
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      },
    }),
  },

  chat: {
    getChatMessages: chatId => fetchWithHandler(`/api/v1/chats/${chatId}/messages`, {
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      },
    }),

    postChatMessage: ({ chatId, text }) => fetchWithHandler(`/api/v1/chats/${chatId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
        'Content-Type': 'application/json',
      },
    }),
  },

  createChat: {
    byPeerId: ({ peerId }) => fetchWithHandler('/api/v1/chats', {
      method: 'POST',
      body: JSON.stringify({ peerId }),
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
        'Content-Type': 'application/json',
      },
    }),

    byEmail: ({ email }) => fetchWithHandler('/api/v1/chatsByEmail', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
        'Content-Type': 'application/json',
      },
    }),
  },

  users: {
    getUsers: () => fetchWithHandler('/api/v1/users', {
      headers: {
        Authorization: `Bearer ${api.store.getState().auth.user.token}`,
      },
    }),
  },

};

api.initialize = (store) => {
  api.store = store;
};


export default api;
