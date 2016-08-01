import Const from '../constants';

const defaultState = {
  errors: [],
};

export default function registration(state = defaultState, action) {
  switch (action.type) {
    case Const.ASYNC_FAIL:
      if (action.name === Const.AUTHENTICATION_REGISTER_USER) {
        return Object.assign({}, state, {errors: action.errors});
      }
    default:
      return state;
  }
};
