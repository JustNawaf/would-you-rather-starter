import { combineReducers } from 'redux';
import auth from './Auth';
import users from './Users';
import questions from './Questions';

export default combineReducers({
    auth,
    users,
    questions
});