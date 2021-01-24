import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import news from './news';
import mynews from './mynews';
import user from './user';
import category from './category';

const rootReducer = combineReducers({
  auth,
  news,
  mynews,
  user,
  category,
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
