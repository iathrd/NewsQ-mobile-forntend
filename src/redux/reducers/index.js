import {combineReducers} from 'redux';

//reducers
import auth from './auth';
import news from './news';
import mynews from './mynews';
import user from './user';

const appReducer = combineReducers({
  auth,
  news,
  mynews,
  user,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
