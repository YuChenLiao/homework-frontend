export default {
  namespace: 'global',

  state: {
    simple: [],
    double: [],
    userinfo: {
      username: '',
      password: '',
    },
    userList: [
      { name: '123456', password: '123456', actor: 'admin' },
      { name: '12345', password: '12345', actor: 'admin' },
      { name: '1234567', password: '1234567', actor: 'user' },
      { name: 'one', password: 'one', actor: 'user' },
      { name: 'two', password: 'two', actor: 'user' },
      { name: 'three', password: 'three', actor: 'user' },
      { name: 'four', password: 'four', actor: 'user' },
    ],
  },

  reducers: {
    changeGameMounts(state, { payload }) {
      if (payload.type === 'simple')
        return {
          ...state,
          simple: payload.list,
        };
      else
        return {
          ...state,
          double: payload.list,
        };
    },
    loginUser(state, { payload }) {
      return {
        ...state,
        userinfo: {
          username: payload.username,
          password: payload.password,
        },
      };
    },
  },
};
