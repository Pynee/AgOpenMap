import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./routes/App";
import Auth from "./routes/Auth";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";
import initialState from "./storage/storage";
import PrivateRoute from "./routes/PrivateRoute";

console.log(initialState);
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login" component={Auth}></Route>
        <PrivateRoute path="/" component={App}></PrivateRoute>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
