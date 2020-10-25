import {applyMiddleware, combineReducers, createStore} from 'redux';

import mainPageReducer from "./reducers/mainPage-reducer";
import registrationReducer from './reducers/registration-reducer';
import logInReducer from './reducers/logIn-reducer';
import showUsersReducer from './reducers/showUsers-reducer';
import currentUserReducer from './reducers/currentUser-reducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    mainPage: mainPageReducer,
    registration: registrationReducer,
    logIn:logInReducer,
    showUsers: showUsersReducer,
    currentUser: currentUserReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
  
  
export default store;