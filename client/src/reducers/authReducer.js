import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE, TEAM_ADDED, TEAM_SAVED, TEAM_REMOVED, TEAM_DELETED
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthorized: null,
  isLoading: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthorized: true,
        isLoading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthorized: true,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case LOGOUT_SUCCESS:
    case SIGNUP_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthorized: false,
        isLoading: false
      };
    case TEAM_SAVED:
      return {
        ...state,
        user: {
          ...state.user,
          favTeams: action.payload
        }
      };
    case TEAM_DELETED:
      return {
        ...state,
        user: {
          ...state.user,
          favTeams: action.payload
        }
      };
    default:
      return state;
  }
}