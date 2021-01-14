import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getNews: (token) => ({
    type: 'GET_NEWS',
    payload: http(token).get('/news/news', {params: {limit: 3, to: 'DESC'}}),
  }),
  loadNews: (token, api) => ({
    type: 'LOAD_NEWS',
    payload: http(token).get(api),
  }),
};
