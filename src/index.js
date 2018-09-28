import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Admin from "./components/Admin";

ReactDOM.render(<App />, document.getElementById("App"));
registerServiceWorker();
