export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export interface UserActionInterface {
    type:string,
    user:UserInterface,

};

export interface UserInterface{
    id:string,
    name:string,
    avatarURL:string,
    answers:{
        [key:string]:string
    },
    questions:Array<string>,
    color:string
}

function login(user:UserInterface){
    return {
        type:LOG_IN,
        user
    };
}

export function logout(){
    return {
        type:LOG_OUT,
    };
}


export function handleLoginUser(user:UserInterface){
    return (dispatch:Function) => {
        dispatch(login(user));
    }
}