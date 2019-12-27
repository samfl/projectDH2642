import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';

// add auth reducer
export default combineReducers({
    user: userReducer,
   // auth: authReducer
}); 