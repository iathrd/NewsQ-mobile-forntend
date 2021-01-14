import http from '../../helpers/http';

export default {
  getNews: (token) => ({
    type: 'GET_USER',
    payload: http(token).get('/auth/getUser'),
  }),
  updateUser: (token, data) => ({
    type: 'UPDATE_USER',
    payload: http(token).get('/auth/getUser', data),
  }),
};
