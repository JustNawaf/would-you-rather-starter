import { LOG_IN, LOG_OUT, UserActionInterface } from '../actions/User';

export default function user(state = null, action: UserActionInterface) {
    switch (action.type) {
        case LOG_IN :
            return action.user

        case LOG_OUT :
            return null
            
        default :
            return state;
    }
}