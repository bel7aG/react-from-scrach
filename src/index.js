import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components";
import * as serviceWorker from "./serviceWorker";
import store from "store";

const myStore = store();

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
