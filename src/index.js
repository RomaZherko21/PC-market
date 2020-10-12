import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import state from './redux/state'

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";


ReactDOM.render(
  <Router>
    <Fragment>
      <Header />
      <div className="sidebarAndMain">
        <Sidebar />
        <Main state={state}/>
      </div>
    </Fragment>
  </Router>,
  document.getElementById("root")
);
