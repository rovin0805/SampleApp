import {combineReducers} from '@reduxjs/toolkit';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
