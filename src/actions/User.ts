export const LOG_IN = "LOG_IN";

export interface UserActionInterface {
    type:string,
    id:string,

};

export interface User{
    id:string,
}

export function user(id:string){
    return {
        type:LOG_IN,
        id
    };
}