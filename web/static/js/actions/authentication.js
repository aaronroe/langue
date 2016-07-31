import axios from 'axios';

import Const from '../constants';
import { startAsync, completeAsync, failAsync } from './async';
import { getCSRFToken } from '../util';


export function registerUser(email, password) {
  return (dispatch) => {
    dispatch(startAsync(Const.AUTHENTICATION_REGISTER_USER, email));

    axios.post('/api/users', {user: {email: email, password: password}, _csrf_token: getCSRFToken()})
      .then((resp) => {
        dispatch(completeAsync(Const.AUTHENTICATION_REGISTER_USER, email));
      }).catch((error) => {
        dispatch(failAsync(Const.AUTHENTICATION_REGISTER_USER, email))
      });
  };
}
