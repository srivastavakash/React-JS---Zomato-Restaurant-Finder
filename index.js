import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./style.css";
import axios from "axios";

axios.defaults.baseURL = "https://developers.zomato.com/api/v2.1";
axios.defaults.headers.common["Authorization"] =
  "33419799ae4c439ddd65b4c6bfbca9cb";
axios.defaults.headers.post["Content-Type"] = "application/json";

render(<App />, document.getElementById("root"));
