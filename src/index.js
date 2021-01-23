import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

import reportWebVitals from "./reportWebVitals";

/*---------------Import Material UI---------------*/
import theme from "./theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
