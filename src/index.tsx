import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyle } from "./GlobalStyle";

ReactDOM.render(
  <div>
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById("root")
)

serviceWorker.unregister()
