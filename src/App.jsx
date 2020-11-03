import React, { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Header from "./components/header/Header";
import MainContainer from "./components/main/MainContainer";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <MainContainer/>
      </Fragment>
    </Router>
  )
}

export default App;

