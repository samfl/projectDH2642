import { GET_USER, ADD_USER, DELETE_USER } from './types';

export const getUser = () => {
    return {
        type: GET_USER
    };
};