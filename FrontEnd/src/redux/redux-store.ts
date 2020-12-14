import {applyMiddleware, combineReducers, createStore} from 'redux';

import registrationReducer from './reducers/registration-reducer';
import logInReducer from './reducers/logIn-reducer';
import searchGoodsReducer from './reducers/searchGoods-reducer';
import shoppingCartReducer from './reducers/shoppingCart-reducer';
import commentsReducer from './reducers/comments-reducer';
import allClientsReducer from './reducers/allClients-reducer';
import allGoodsReducer from './reducers/allGoods-reducer';
import commonReducer from './reducers/common-reducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducer = combineReducers({
    registration: registrationReducer,
    logIn:logInReducer,
    allClients: allClientsReducer,
    searchGoods: searchGoodsReducer,
    shoppingCart: shoppingCartReducer,
    comments: commentsReducer,
    allGoods: allGoodsReducer,
    common: commonReducer,
    form: formReducer,
})

type ReducerType = typeof reducer;
export type AppStateType = ReturnType<ReducerType>;

let store = createStore(reducer, applyMiddleware(thunkMiddleware))
  
  
export default store;