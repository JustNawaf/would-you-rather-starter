import { UserInterface } from "./Auth";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SET_USERS = "SET_USERS";

export interface setUsersActionInterface {
    type:string,
    users:{
        [key:string]:UserInterface
    },

};




export function setUsers(users:{[key:string]:UserInterface}){
    return {
        type:SET_USERS,
        users
    };
}
