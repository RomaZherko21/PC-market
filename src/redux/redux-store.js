import {combineReducers, createStore} from 'redux';

import mainPageReducer from "./reducers/mainPage-reducer";
import registrationReducer from './reducers/registration-reducer';
import logInReducer from './reducers/logIn-reducer';
import showUsersReducer from './reducers/showUsers-reducer';

let reducers = combineReducers({
    mainPage: mainPageReducer,
    registration: registrationReducer,
    logIn:logInReducer,
    showUsers: showUsersReducer,
})

let store = createStore(reducers)
  
  
export default store;