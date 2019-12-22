import { GET_USER, ADD_USER, DELETE_USER } from './types';

export const getUser = () => {
    return {
        type: GET_USER
    };
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