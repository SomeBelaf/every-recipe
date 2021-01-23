import React from "react";
import ReactDOM from "react-dom";
/*---------------Import Redux---------------*/
import store from "./store/store";
import { Provider } from "react-redux";

import App from "./App.jsx";

import reportWebVitals from "./reportWebVitals";

/*---------------Import Material UI---------------*/
import theme from "./theme.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

reportWebVitals();
