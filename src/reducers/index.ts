import { combineReducers } from 'redux';
import auth from './Auth';
import users from './Users';

export default combineReducers({
    auth,
    users
});