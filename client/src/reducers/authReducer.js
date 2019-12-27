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

const initialState = {
    username: localStorage.getItem('username'),
    isLoggedIn: null,
    isLoading: false
}

export default function(state = initialState, action) {
    switch(action.type) {

        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };

        case USER_LOADED:
            return {
                ...state,
                username: action.payload, 
                isLoadingIn: true,
                isLoading: true
            };

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                ...action.payload, 
                isLoadingIn: true,
                isLoading: false
            };
        
        case LOGIN_FAILURE:
        case LOGOUT_SUCCESS:
        case AUTH_ERROR:
        case SIGNUP_FAILURE:
            localStorage.removeItem('username');
            return {
                ...state,
                username: null, 
                isLoadingIn: false,
                isLoading: false
            };
    }
}