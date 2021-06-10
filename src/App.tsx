import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
