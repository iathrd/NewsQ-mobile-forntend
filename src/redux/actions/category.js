import http from '../../helpers/http';

export default {
  getCategory: (token) => ({
    type: 'LIST_CATEGORY',
    payload: http(token).get('/category/listCategory'),
  }),
  geNews: (token, category) => ({
    type: 'GET_CATEGORY_NEWS',
    payload: http(token).get('news/categoryNews', {
      params: {category},
    }),
  }),
  updateAvatar: (token, data) => ({
    type: 'UPDATE_AVATAR',
    payload: http(token).post('/auth/updateUser', data),
  }),
  clearMessage: () => ({
    type: 'CLEAR_MESSAGE',
  }),
};
