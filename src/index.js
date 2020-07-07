import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Dog from "./components/Dog";
import Cat from "./components/Cat";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Header />
      <Route exact path="/" component={Dog} />
      <Route exact path="/cat" component={Cat} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
