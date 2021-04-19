import { setUsersActionInterface, SET_USERS } from '../actions/Users';

export default function users(state = {}, action: setUsersActionInterface) {
    switch (action.type) {
        case SET_USERS :
            return {
                ...action.users
            }
            
        default :
            return state;
    }
}