import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getMyNews: (token) => ({
    type: 'GET_MYNEWS',
    payload: http(token).get('/news/myNews', {params: {limit: 3, to: 'DESC'}}),
  }),
  loadMyNews: (token, api) => ({
    type: 'LOAD_MYNEWS',
    payload: http(token).get(api),
  }),
  editNews: (token, id, data) => ({
    type: 'UPDATE_NEWS',
    payload: http(token).patch(`news/editNews/${id}`, qs.stringify(data)),
  }),
  uploadImage: (token, id, data) => ({
    type: 'UPLOAD_IMAGE',
    payload: http(token).patch(`news/editNews/${id}`, data),
  }),
  createNews: (token, data) => ({
    type: 'CREATE_NEWS',
    payload: http(token).post('news/createNews', data),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
