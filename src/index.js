import React, { } from "react";
import ReactDOM from "react-dom";

import state from './redux/state'

import App from './App'

ReactDOM.render(
    <App state={state}/>,
    document.getElementById("root")
  );
  