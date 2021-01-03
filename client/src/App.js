import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/Landing/Landing";
import Posts from "./components/Posts/Posts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import Post from "./components/Post/Post";

import { Provider } from "react-redux";
import store from "./store/index";
import { loadUser } from "./store/actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/posts" exact component={Posts} />
            <PrivateRoute path="/posts/:id" exact component={Post} />
            <Redirect to={"/"} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
