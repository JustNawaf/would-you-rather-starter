import { setQuestionsActionInterface, SET_QUESTIONS } from "../actions/Questions";

export default function questions(state = {}, action: setQuestionsActionInterface) {
    switch (action.type) {
        case SET_QUESTIONS :
            return {
                ...action.questions
            }
            
        default :
            return state;
    }
}