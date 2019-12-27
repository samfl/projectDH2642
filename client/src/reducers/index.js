import { combineReducers } from 'redux';
import userReducer from './userReducer';
import apiReducer from "./apiReducer";
import authReducer from './authReducer';

// add auth reducer
export default combineReducers({
    user: userReducer,
    api: apiReducer,
   // auth: authReducer
}); 