// Where the state is 
import { GET_USER, ADD_USER, DELETE_USER, USER_LOADING } from '../actions/types';
const initialState = {
    users: [], 
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.username !== action.payload)
            };
        case ADD_USER: 
            return {
                ...state,
                users: [action.payload, ...state.users]
            };
        case USER_LOADING:
            return {
                ...state, 
                loading: true
            };
        default:
            return state; 
    }
}