import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
//import Test from "./test";
import ReactCalendarBase from "./Calendar/ReactCalendarBase";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

//ReactDOM.render(<ReactCalendarBase />, document.querySelector("#root"));

ReactDOM.render(
  <BrowserRouter>
    <ReactCalendarBase />
  </BrowserRouter>,
  document.querySelector("#root")
);
