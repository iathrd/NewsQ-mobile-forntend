import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import news from './news';
import mynews from './mynews';
import user from './user';

const rootReducer = combineReducers({
  auth,
  news,
  mynews,
  user,
});

export default (state, action) =>
  rootReducer(action.type === 'USER_LOGOUT' ? undefined : state, action);
