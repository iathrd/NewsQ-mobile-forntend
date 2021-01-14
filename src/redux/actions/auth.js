import http from '../../helpers/http';
import qs from 'querystring';

export default {
  doLogin: (data) => ({
    type: 'LOGIN',
    payload: http().post('/auth/login', qs.stringify(data)),
  }),
  register: (data) => ({
    type: 'REGISTER',
    payload: http().post('auth/register', qs.stringify(data)),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
  logOut: () => ({
    type: 'LOG_OUT',
  }),
};
