import {
    USER_LOADED, 
    USER_LOADING, 
    LOGIN_SUCCESS,
    LOGIN_FAILURE, 
    LOGOUT_SUCCESS, 
    SIGNUP_SUCCESS, 
    SIGNUP_FAILURE, 
    AUTH_ERROR
} from '../actions/types';
import axios from 'axios';

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });

    const user = getState().username;

    const config = {
        headers: { 'Content-type': "application/json" }
    }

    axios.get('/auth/user', config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch({ type: AUTH_ERROR } );
        })
}