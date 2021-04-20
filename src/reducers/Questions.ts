import { CREATE_QUESTION, setQuestionsActionInterface, SET_QUESTIONS } from "../actions/Questions";

export default function questions(state = {}, action: setQuestionsActionInterface) {
    switch (action.type) {
        case SET_QUESTIONS :
            return {
                ...action.questions
            }

        case CREATE_QUESTION :
            let newQuestion = {};
            if(action.question){
                newQuestion = {
                    [action.question.id]:{
                        ...action.question
                    }
                };
            }
            return {
                ...state,
                ...newQuestion
            }   
        default :
            return state;
    }
}