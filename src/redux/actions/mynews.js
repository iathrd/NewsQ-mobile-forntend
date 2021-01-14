import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getMyNews: (token) => ({
    type: 'GET_MYNEWS',
    payload: http(token).get('/news/myNews', {params: {limit: 3}}),
  }),
  loadMyNews: (token, api) => ({
    type: 'LOAD_MYNEWS',
    payload: http(token).get(api),
  }),
};
