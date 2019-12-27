import { GET_USER, ADD_USER, DELETE_USER, USER_LOADING } from './types';
import axios from 'axios'; 

export const getUser = () => dispatch => {
    dispatch(setUsersLoading());
    axios
        .get('/users')
        .then(res => dispatch({type: GET_USER, payload: res.data}))
};

export const deleteUser = (username) => {
    return {
        type: DELETE_USER,
        payload: username
    };
};

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
};

export const setUsersLoading = () => {
    return {
        type: USER_LOADING
    }
}