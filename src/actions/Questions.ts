import { _getQuestions, _saveQuestion } from "../Data/_Data";
import { addQuestionToUser, UserInterface } from "./Auth";

export const SET_QUESTIONS = "SET_QUESTIONS";
export const CREATE_QUESTION = "CREATE_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";


export interface QuestionInterface{
    id: string,
    author: string,
    timestamp: Number,
    optionOne: OptionInterface,
    optionTwo: OptionInterface
};

export interface OptionInterface{
    votes:Array<string>,
    text:string
}

export interface QuestionsActionInterface{
    type:string,
    questions?:{
        [key:string]:QuestionInterface
    },
    question?:QuestionInterface,
    userID?:string,
    ans?:string
    qid?:string
}



export function setQuestions(questions:{[key:string]:QuestionInterface}){
    return {
        type:SET_QUESTIONS,
        questions
    };
}

export function handleSetQuestions(){
    return (dispatch:Function) => {
        _getQuestions().then((questions:{[key:string]:QuestionInterface}) => {
            dispatch(setQuestions(questions));
        })
    }
}


function createQuestion(question:QuestionInterface){
    return {
        type:CREATE_QUESTION,
        question
    };
}

export function handleCreateQuestion(user:UserInterface,question:any){
    return (dispatch:Function) => {
        _saveQuestion(question).then((q) => {
            dispatch(createQuestion(q))
            dispatch(addQuestionToUser(user,q.id))
        })
    }
}


export function addAnswerToQuestion(userID:string,ans:string,qid:string){
    return {
        type:ADD_ANSWER_TO_QUESTION,
        userID,
        ans,
        qid
    }

}