import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "./components/Landing/Landing";

import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <Redirect to={"/"} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
