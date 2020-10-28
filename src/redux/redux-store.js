import {applyMiddleware, combineReducers, createStore} from 'redux';

import mainPageReducer from "./reducers/mainPage-reducer";
import registrationReducer from './reducers/registration-reducer';
import logInReducer from './reducers/logIn-reducer';
import showUsersReducer from './reducers/showUsers-reducer';
import currentUserReducer from './reducers/currentUser-reducer';
import searchGoodsReducer from './reducers/searchGoods-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    mainPage: mainPageReducer,
    registration: registrationReducer,
    logIn:logInReducer,
    showUsers: showUsersReducer,
    currentUser: currentUserReducer,
    searchGoods: searchGoodsReducer,
    form: formReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
  
  
export default store;