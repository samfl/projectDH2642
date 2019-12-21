import { combineReducers } from 'redux';
import userReducer from './userReducer';

// add auth reducer
export default combineReducers({
    user: userReducer
}); 