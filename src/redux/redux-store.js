import {combineReducers, createStore} from 'redux';

import mainPageReducer from "./reducers/mainPage-reducer";
import registrationReducer from './reducers/registration-reducer';

let reducers = combineReducers({
    mainPage: mainPageReducer,
    registration: registrationReducer,
})

let store = createStore(reducers)

export function addCommentActionCreator(author, text) {
    return {
      type: "ADD-COMMENT-HANDLE",
      author: author,
      text: text,
    };  
  }
  
  
export default store;