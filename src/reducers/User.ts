import { LOG_IN, UserActionInterface } from '../actions/User';

export default function user(state = null, action: UserActionInterface) {
    switch (action.type) {
        case LOG_IN :
            return action.id
            
        default :
            return state;
    }
}