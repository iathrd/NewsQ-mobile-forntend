import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import news from './news';

export default combineReducers({
  auth,
  news,
});
