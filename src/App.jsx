import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Main/>
      </Fragment>
    </Router>
  )
}

export default App;

