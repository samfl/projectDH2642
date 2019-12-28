  
/* Turns multiple reducing funcitons into a single one. */

import { combineReducers } from 'redux';

import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer
});