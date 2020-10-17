import React from "react";
import ReactDOM from "react-dom";

import store from "./redux/redux-store";

import App from "./App";

function reRenderEntireTree(store) {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
}


reRenderEntireTree(store);

store.subscribe(() => {
  reRenderEntireTree(store);
});
