import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import "./index.css";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./components/products/Products";

ReactDOM.render(
  <Router>
    <Fragment>
      <Header />
      <Sidebar />
      <Products />
    </Fragment>
  </Router>,
  document.getElementById("root")
);
