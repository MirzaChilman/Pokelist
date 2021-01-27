import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Store from "./containers/Store";
import 'antd/dist/antd.css';

const rootEl = document.getElementById("root");

render(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
  rootEl
);
