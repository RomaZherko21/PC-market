import {combineReducers, createStore} from 'redux';

import mainPageReducer from "./reducers/mainPage-reducer";
import registrationReducer from './reducers/registration-reducer';
import logInReducer from './reducers/logIn-reducer';
import showUsersReducer from './reducers/showUsers-reducer';
import currentUserReducer from './reducers/currentUser-reducer';

let reducers = combineReducers({
    mainPage: mainPageReducer,
    registration: registrationReducer,
    logIn:logInReducer,
    showUsers: showUsersReducer,
    currentUser: currentUserReducer,
})

let store = createStore(reducers)
  
  
export default store;