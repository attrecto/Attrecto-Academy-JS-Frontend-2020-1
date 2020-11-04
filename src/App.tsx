import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Badges from "./pages/Badges/Badges";
import Users from "./pages/Users/Users";
import { Redirect, Route, Switch } from "react-router";
import Badge from "./pages/Badge/Badge";
import { ToastContainer } from "react-toastify";
import User from "./pages/User/User";

interface AppProps {}

class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
          <Route path="/user" component={User} />
          <Route path="/badges" component={Badges} />
          <Route path="/badge/:id" component={Badge} />
          <Route path="/badge" component={Badge} />
          <Redirect to="/home" />
        </Switch>
        <ToastContainer autoClose={1500} />
      </div>
    );
  }
}

export default App;
