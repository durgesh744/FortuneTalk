import {combineReducers} from 'redux';
import {CLEAN_STORE} from '../actionTypes/actionTypes';
import user from './user';

const rootReducer = combineReducers({
  user
});

const appReducer = (state, action) => {
  if (action.type == CLEAN_STORE) {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;
