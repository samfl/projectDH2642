import {
    GET_USERS,
    ADD_USER,
    DELETE_USER
  } from '../actions/types';
  
  const initialState = {
    users: [],
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          users: action.payload,
          loading: false
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter(user => user._id !== action.payload)
        };
      default:
        return state;
    }
  }