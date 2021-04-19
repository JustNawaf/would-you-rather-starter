export const SET_QUESTIONS = "SET_QUESTIONS";

export function setQuestions(questions:any){
    return {
        type:SET_QUESTIONS,
        questions
    }
}   