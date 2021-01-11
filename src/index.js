import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import IFrameDemo from "./components/IFrameDemo/IFrameDemo";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" render={() => <IFrameDemo />} />
        <App />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
