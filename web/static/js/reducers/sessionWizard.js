import Const from '../constants';

const defaultState = {
  sessionType: null,
};

export default function sessionWizard(state = defaultState, action) {
  switch (action.type) {
    case Const.SET_SESSION_TYPE:
      return Object.assign({}, state, {sessionType: action.sessionType});
    default:
      return state;
  }  
};
