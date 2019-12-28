import { GET_ERRORS, RESET_ERRORS } from './types';

export const returnErrors = (message, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { message, status, id }
  };
};

export const clearErrors = () => {
  return {
    type: RESET_ERRORS
  };
};