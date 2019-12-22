// Where the state is 
import { GET_USER, ADD_USER, DELETE_USER } from '../actions/types';
const initialState = {
    users: [
        { username: 'hej1', password: '123' },
        { username: 'hej2', password: '123' },
        { username: 'hej3', password: '123' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.username !== action.payload)
            };
        case ADD_USER: 
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        default:
            return state; 
    }
}