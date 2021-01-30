import * as React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Store from "./containers/Store";

import "./index.scss";
const rootEl = document.getElementById("app");

hydrate(
  <BrowserRouter>
    <Store>
      <App />
    </Store>
  </BrowserRouter>,
  rootEl
);

if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/service-worker.js");
    });
  }
}
