import { GET_ERRORS, RESET_ERRORS } from '../actions/types';

const initialState = {
  message: {},
  status: null,
  id: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id
      };
    case RESET_ERRORS:
      return {
        message: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
}