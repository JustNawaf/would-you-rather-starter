import { LOG_IN, LOG_OUT, UPDATE_QUESTIONS_USER, UserActionInterface } from '../actions/Auth';

export default function user(state = null, action: UserActionInterface) {
    switch (action.type) {
        case LOG_IN :
            return action.user

        case LOG_OUT :
            return null
        
        case UPDATE_QUESTIONS_USER:
            return action.user

        default :
            return state;
    }
}