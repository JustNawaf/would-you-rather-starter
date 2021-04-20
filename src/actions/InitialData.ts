import { _getQuestions, _getUsers } from '../Data/_Data';
import { setQuestions } from './Questions';
import { setUsers } from './Users';

export const handleInitialData = () => {
    return (dispatch: Function) => {
        _getUsers().then((users) => {
            dispatch(setUsers(users));
        })

        _getQuestions().then((questions) => {
            dispatch(setQuestions(questions));
        })
    }
}