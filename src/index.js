import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./GlobalStyles";
import "antd/dist/antd.less";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
