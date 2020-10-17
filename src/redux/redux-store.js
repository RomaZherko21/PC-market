import {combineReducers, createStore} from 'redux';

import mainPageReducer from "./mainPage-reducer";

let reducers = combineReducers({
    mainPage: mainPageReducer,
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