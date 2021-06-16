import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface defaultState {
  simple: [];
  double: [];
  userinfo: {
    username: '';
    password: '';
    game: [];
  };
  userList: [
    { name: '123456'; password: '123456'; actor: 'admin' },
    { name: '12345'; password: '12345'; actor: 'admin' },
    { name: '1234567'; password: '1234567'; actor: 'user' },
    { name: 'one'; password: 'one'; actor: 'user' },
    { name: 'two'; password: 'two'; actor: 'user' },
    { name: 'three'; password: 'three'; actor: 'user' },
    { name: 'four'; password: 'four'; actor: 'user' },
  ];
}

export interface defaultModel {
  namespace: 'global';
  state: defaultState;
  effects: {
    query: Effect;
  };
  reducers: {
    changeGameMounts: Reducer<defaultState>;
    loginUser: Reducer<defaultState>;
    // 启用 immer 之后
    // save: ImmerReducer<UserInfoModelState>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const globalState: defaultModel = {
  namespace: 'global',

  state: {
    simple: [],
    double: [],
    userinfo: {
      username: '',
      password: '',
      game: [],
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

  effects: {
    *query({ payload }, { call, put }) {},
  },

  reducers: {
    changeGameMounts(state: any, { payload }: any) {
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
    loginUser(state: any, { payload }: any) {
      return {
        ...state,
        userinfo: {
          username: payload.username,
          password: payload.password,
        },
      };
    },
  },
  subscriptions: {
    //订阅
    setup({ dispatch, history }, done) {
      history.listen((location, action) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};

export default globalState;
