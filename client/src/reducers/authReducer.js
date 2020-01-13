import {
  USER_LOADED,
  USER_LOADING,
  PASSWORD_UPDATED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE, TEAM_ADDED, TEAM_SAVED, TEAM_REMOVED, TEAM_DELETED, FOCUS_CHANGED
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthorized: true,
  isLoading: false,
  user: null,
  focusedTeam: null
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
    case PASSWORD_UPDATED:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.payload
        }
      };
    case FOCUS_CHANGED:
      return {
    ...state,
    focusedTeam: action.payload
  };
    default:
      return state;
  }
}