import React, { } from "react";
import ReactDOM from "react-dom";

import store from './redux/store'

import App from './App'
 


function reRenderEntireTree(){
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById("root")
  );
}

store.subscribe(reRenderEntireTree);
reRenderEntireTree();

  