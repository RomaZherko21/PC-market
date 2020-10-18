import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/redux-store";

import StoreContext from "./storeContext";
import {Provider} from "./storeContext";

import App from "./App";

function reRenderEntireTree(store) {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
      </Provider>, 
    document.getElementById("root")
  );
}

reRenderEntireTree(store);

store.subscribe(() => {
  reRenderEntireTree(store);
});
