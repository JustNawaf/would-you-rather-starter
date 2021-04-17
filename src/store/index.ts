import Middleware from '../middleware';
import Reducers from '../reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserInterface } from '../actions/User';


export interface StoreInterface {
    user:UserInterface,
    users:{
        [key:string]:UserInterface
    }
}



const store = createStore(Reducers, composeWithDevTools(Middleware));


export default store;