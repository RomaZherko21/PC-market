import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";



import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";

const App = (props) => {
  return (
    <Router>
      <Fragment>
        <Header />
        <div className="sidebarAndMain">
          <Sidebar />
          <Main store={props.store} />
        </div>
      </Fragment>
    </Router>
  )
}

export default App;

