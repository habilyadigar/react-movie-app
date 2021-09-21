import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import logger from "redux-logger";
import reduxPromise from "redux-promise-middleware";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxPromise, thunk, logger))
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
