import { _saveQuestionAnswer } from "../Data/_Data"
import { addAnswerToUser } from "./Auth";
import { addAnswerToQuestion } from "./Questions";
import { addAnswerToUsers } from "./Users";

// export function handleAddAnswer(data:any){
//     return (dispatch:Function) => {
//         _saveQuestionAnswer(data).then((users,q) => {
//             // dispatch(createQuestion(q))
//             // dispatch(addQuestionToUser(user,q.id))
//         })
//     }
// }

interface AddAnswerActionInterface{
    authedUser:string,
    qid:string,
    answer:string,
};

export function handleAddAnswer(data:AddAnswerActionInterface){
    return (dispatch:Function) => {
        let addAnswerToUsersData:any = {
            ans:{
                [data.qid]:data.answer
            },
            id:data.authedUser
        }
        _saveQuestionAnswer(data).then(() => {
            dispatch(addAnswerToUser({[data.qid]:data.answer}))
            dispatch(addAnswerToUsers(addAnswerToUsersData))
            dispatch(addAnswerToQuestion(data.authedUser,data.answer,data.qid));
            return;
        });
    };
}