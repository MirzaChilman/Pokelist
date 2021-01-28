import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Store from "./containers/Store";

const rootEl = document.getElementById("app");

render(
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
