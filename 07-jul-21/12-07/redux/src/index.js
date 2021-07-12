import React from "react";
import { ReactDOM } from "react";
import "./sass/main.scss";
import App from "./App";
// step THREE
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";

// step FOUR

const store = createStore(
  allReducers,
  { counter: 0, userName: "Catha" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// step FIVE rendering all components
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
