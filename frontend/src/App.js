import "antd/dist/antd.css";
import "./assets/css/global.scss";
import React, { useState } from "react";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/Homepage";


const App= ()=> {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact>
        </Route>
        <Route path="/login" component={Login}>
        </Route>
        <Route path="/register" component>register</Route>
      </Switch>
    </Router>
  );
}

export default App;
