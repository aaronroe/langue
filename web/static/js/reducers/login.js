import Const from '../constants';

const defaultState = {
  error: null,
};

export default function login(state = defaultState, action) {
  switch (action.type) {
    case Const.ASYNC_FAIL:
      if (action.name === Const.AUTHENTICATION_LOGIN_USER) {
        return Object.assign({}, state, {error: action.error});
      }
    default:
      return state;
  }
};
