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
  searchNews: (token, search = '') => ({
    type: 'SEARCH_NEWS',
    payload: http(token).get('/news/news', {
      params: {limit: 3, search: search},
    }),
  }),
  loadNews2: (token, api) => ({
    type: 'LOAD_NEWS2',
    payload: http(token).get(api),
  }),
};
