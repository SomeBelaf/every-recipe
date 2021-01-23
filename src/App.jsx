import React from "react";
/*---------------Import react-router--------------*/
import { BrowserRouter, Switch, Route } from "react-router-dom";
/*---------------Import components---------------*/
import Header from "./containers/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/RecipePage/RecipePage";
import Page404 from "./pages/Page404/Page404";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <ErrorBoundary variant="h4">
            <HomePage />
          </ErrorBoundary>
        </Route>
        <Route exact path="/recipe/:recipeId">
          <ErrorBoundary variant="h4">
            <RecipePage />
          </ErrorBoundary>
        </Route>
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
