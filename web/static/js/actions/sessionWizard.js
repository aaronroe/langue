import Const from '../constants';

export function setSessionType(sessionType) {
  return { type: Const.SET_SESSION_TYPE, sessionType };
}
