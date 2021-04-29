import { ADD_QUESTION_ANS_TO_USERS, ADD_QUESTION_TO_USERS, setUsersActionInterface, SET_USERS } from '../actions/Users';

export default function users(state:any = {}, action: setUsersActionInterface) {
    switch (action.type) {
        case SET_USERS :
            return {
                ...action.users
            }
        
        case ADD_QUESTION_ANS_TO_USERS :
            if(action.data)
                return {
                    ...state,
                    [action.data.id]:{
                        ...state[action.data.id],
                        answers:{
                            ...state[action.data.id].answers,
                            ...action.data.ans
                        }

                    }
                }

            return {
                ...state
            };
        
        case ADD_QUESTION_TO_USERS :
            if(action.addQuestion)
                return {
                    ...state,
                    [action.addQuestion.userID]:{
                        ...state[action.addQuestion.userID],
                        questions:state[action.addQuestion.userID].questions.concat(action.addQuestion.qID)
                }
            }

            return {
                ...state
            }
        default :
            return state;
    }
}