import { ADD_ANSWER_TO_QUESTION, CREATE_QUESTION, QuestionsActionInterface, SET_QUESTIONS } from "../actions/Questions";

export default function questions(state:any = {}, action: QuestionsActionInterface) {
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
        case ADD_ANSWER_TO_QUESTION:
            if(action.ans && action.qid){
                return {
                    ...state,
                    [action.qid]:{
                        ...state[action.qid],
                        [action.ans]:{
                            ...state[action.qid][action.ans],
                            votes:state[action.qid][action.ans].votes.concat(action.userID)
                        }
                    }
                }  
            }
            return {
                ...state
            }

        default :
            return state;
    }
}