import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import configure from "./App/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
const { store, persistor } = configure();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
