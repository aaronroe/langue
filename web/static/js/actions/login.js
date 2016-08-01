import axios from 'axios';

import Const from '../constants';
import { startAsync, completeAsync, failAsync } from './async';
import { getCSRFToken } from '../util';


export function loginUser(email, password) {
  return (dispatch) => {
    dispatch(startAsync(Const.AUTHENTICATION_LOGIN_USER, email));

    let params = {email: email, password: password, _csrf_token: getCSRFToken()};

    axios.post('/auth/identity/callback', params)
      .then((resp) => {
        dispatch(completeAsync(Const.AUTHENTICATION_LOGIN_USER, email));
      }).catch((error) => {
        dispatch(failAsync(Const.AUTHENTICATION_LOGIN_USER, email, error.response.data.error))
      });
  };
}
