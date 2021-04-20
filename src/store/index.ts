import Middleware from '../middleware';
import Reducers from '../reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserInterface } from '../actions/Auth';
import { QuestionInterface } from '../actions/Questions';


export interface StoreInterface {
    auth:UserInterface,
    users:{
        [key:string]:UserInterface
    },
    questions:{
        [key:string]:QuestionInterface
    }
}



const store = createStore(Reducers, composeWithDevTools(Middleware));


export default store;