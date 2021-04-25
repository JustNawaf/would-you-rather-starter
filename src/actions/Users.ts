import { UserInterface } from "./Auth";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_USERS = "SET_USERS";
export const ADD_QUESTION_ANS_TO_USERS = "ADD_QUESTION_ANS_TO_USERS";
export interface setUsersActionInterface {
    type:string,
    users:{
        [key:string]:UserInterface
    },
    data?:{
        ans:{[key:string]:string},
        id:string,
    }

};


export function setUsers(users:{[key:string]:UserInterface}){
    return {
        type:SET_USERS,
        users
    };
}

export function addAnswerToUsers(data:{ans:{[key:string]:string,id:string}}){
    console.log(data);
    return {
        type:ADD_QUESTION_ANS_TO_USERS,
        data
    }
}
