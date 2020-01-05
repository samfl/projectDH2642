import axios from 'axios';
import { returnErrors } from './errorActions';
import { tokenConfig } from './authActions';

import {
    DELETE_USER,
    GET_USER,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR

} from './types';

export const getUser = () => dispatch => {
    dispatch();
    axios
      .get('/api/users')
      .then(res =>
        dispatch({
          type: GET_USER,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };

  export const deleteUser = id => (dispatch, getState) => {
    axios
      .delete(`/api/users/${id}`, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: DELETE_USER,
          payload: id
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
/*
export const getTeams = () => dispatch => {
    dispatch(setTeamsLoading());
    axios
      .get('/api/teams')
      .then(res =>
        dispatch({
          type: GET_TEAMS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const addTeam = team => (dispatch, getState) => {
    axios
      .post('/api/teams', team, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: ADD_TEAM,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const removeTeam = id => (dispatch, getState) => {
    axios
      .delete(`/api/teams/${id}`, tokenConfig(getState))
      .then(res =>
        dispatch({
          type: REMOVE_TEAM,
          payload: id
        })
      )
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
*/