import http from '../../helpers/http';

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
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
