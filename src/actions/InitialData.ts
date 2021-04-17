import { _getUsers } from '../Data/_Data';
import { setUsers } from './User';

export const handleInitialData = () => {
    return (dispatch: Function) => {
        _getUsers().then((users) => {
            dispatch(setUsers(users));
        })
    }
}