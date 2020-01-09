import axios from 'axios';
import { returnErrors } from './errorActions';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  TEAM_SAVED,
  TEAM_DELETED,
  PASSWORD_UPDATED
} from './types';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
};

// Signup User
export const saveUser = ({ username, password }) => dispatch => {

  // Content-Type header
  const config = { headers: { 'Content-Type': 'application/json' } };

  // Request body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'SIGNUP_FAILURE')
      );
      dispatch({
        type: SIGNUP_FAILURE
      });
    });
};

// Login User
export const login = ({ username, password }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAILURE')
      );
      dispatch({
        type: LOGIN_FAILURE
      });
    });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// Setup config/headers and token
// Helper
export const tokenConfig = getState => {
  // Token from localStorage
  const token = getState().auth.token;

  const config = { headers: { 'Content-type': 'application/json' }};

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};

//adds a team to the users favorite teams
//TODO remove team from state before patch?
export const addTeam = (body, userId) => {
  return function(dispatch){
    const config = { headers: { 'Content-Type': 'application/json' } };
    axios
        .patch(`/api/users/addTeam/${userId}`, body, config)
        .then(res =>{
          dispatch({
            type: TEAM_SAVED,
            payload: res.data
          })
        })
  }
};

//removes a team from users favorite teams
//TODO remove team from state before patch?
export const removeTeam = (body, userId) => {
  return function(dispatch){
    const config = { headers: { 'Content-Type': 'application/json' } };
    axios
        .patch(`/api/users/removeTeam/${userId}`, body, config)
        .then(res =>{
          dispatch({
            type: TEAM_DELETED,
            payload: res.data
          })
        })
  }
};

export const changePassword = (body, userId) => {
  return function(dispatch){
    const config = { headers: { 'Content-Type': 'application/json' } };
    axios
        .patch(`/api/users/changePassword/${userId}`, body, config)
        .then(res =>{
          dispatch({
            type: PASSWORD_UPDATED,
            payload: res.data
          });
          console.log(res.data);
        })
  }
};