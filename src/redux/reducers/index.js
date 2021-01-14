import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import news from './news';
import mynews from './mynews';

export default combineReducers({
  auth,
  news,
  mynews,
});
