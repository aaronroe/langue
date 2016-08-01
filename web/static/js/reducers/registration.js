import Const from '../constants';

const defaultState = {
  error: null,
};

export default function registration(state = defaultState, action) {
  switch (action.type) {
    case Const.ASYNC_FAIL:
      if (action.name === Const.AUTHENTICATION_REGISTER_USER) {
        return Object.assign({}, state, {error: action.error.email.join(', ')});
      }
    default:
      return state;
  }
};
