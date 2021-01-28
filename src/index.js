import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
const root = document.getElementById("root");

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  root
);
