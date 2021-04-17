import { combineReducers } from 'redux';
import user from './User';
import users from './InitialData';

export default combineReducers({
    user,
    users
});