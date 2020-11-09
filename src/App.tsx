import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Badges from "./pages/Badges/Badges";
import Users from "./pages/Users/Users";
import { Redirect, Route, Switch } from "react-router";
import Badge from "./pages/Badge/Badge";
import { ToastContainer } from "react-toastify";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";

interface AppProps {}

interface AppState {
  token: string | null;
}

class App extends Component<AppProps, AppState> {
  readonly state: AppState = {
    token: localStorage.getItem("auth-token"),
  };

  setToken = (token: string | null) => {
    if (token) {
      localStorage.setItem("auth-token", token);
    } else {
      localStorage.removeItem("auth-token");
    }

    this.setState({ token });
  };

  render() {
    const { token } = this.state;

    return (
      <div>
        <Switch>
          <Route
            path="/login"
            render={() =>
              token ? <Redirect to="/" /> : <Login setToken={this.setToken} />
            }
          />
          <Route
            path="/"
            render={() =>
              token ? (
                <>
                  <Navbar setToken={this.setToken} />
                  <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/user/:id" component={User} />
                    <Route path="/user" component={User} />
                    <Route path="/badges" component={Badges} />
                    <Route path="/badge/:id" component={Badge} />
                    <Route path="/badge" component={Badge} />
                    <Redirect to="/users" />
                  </Switch>
                </>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
        </Switch>
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}

export default App;
