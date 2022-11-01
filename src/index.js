import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import reducers from "./redux/reducers";
import reduxThunk from "redux-thunk";

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(reduxThunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
