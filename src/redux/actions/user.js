import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getUser: (token) => ({
    type: 'GET_USER',
    payload: http(token).get('/auth/getUser'),
  }),
  updateUser: (token, data) => ({
    type: 'UPDATE_USER',
    payload: http(token).post('/auth/updateUser', data),
  }),
  updateAvatar: (token, data) => ({
    type: 'UPDATE_AVATAR',
    payload: http(token).post('/auth/updateUser', data),
  }),
  ChangePassword: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).post('auth/changePassword', qs.stringify(data)),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
