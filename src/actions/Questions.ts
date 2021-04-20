export const SET_QUESTIONS = "SET_QUESTIONS";


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

export interface setQuestionsActionInterface{
    type:string,
    questions:{
        [key:string]:QuestionInterface
    },
}



export function setQuestions(questions:{[key:string]:QuestionInterface}){
    return {
        type:SET_QUESTIONS,
        questions
    };
}
