import { ADD_QUESTION_ANS_TO_USER, LOG_IN, LOG_OUT, UPDATE_QUESTIONS_USER, UserActionInterface } from '../actions/Auth';

export default function user(state:any = null, action: UserActionInterface) {
    switch (action.type) {
        case LOG_IN :
            return action.user

        case LOG_OUT :
            return null
        
        case UPDATE_QUESTIONS_USER:
            return {
                ...state,
                questions:state.questions.concat(action.questionID)
            }

        case ADD_QUESTION_ANS_TO_USER:
            return {
                ...state,
                answers:{
                    ...state.answers,
                    ...action.ans
                }
            }    


        default :
            return state;
    }
}