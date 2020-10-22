import {combineReducers, createStore} from 'redux';

import mainPageReducer from "./reducers/mainPage-reducer";
import registrationReducer from './reducers/registration-reducer';
import logInReducer from './reducers/logIn-reducer';

let reducers = combineReducers({
    mainPage: mainPageReducer,
    registration: registrationReducer,
    logIn:logInReducer,

})

let store = createStore(reducers)
  
  
export default store;