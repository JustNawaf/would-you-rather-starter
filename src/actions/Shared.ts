import { _saveQuestionAnswer } from "../Data/_Data"
import { addAnswerToUser } from "./Auth";
import { addAnswerToQuestion } from "./Questions";

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
        _saveQuestionAnswer(data).then(() => {
            dispatch(addAnswerToUser({[data.qid]:data.answer}))
            dispatch(addAnswerToQuestion(data.authedUser,data.answer,data.qid));
            return;
        });
    };
}