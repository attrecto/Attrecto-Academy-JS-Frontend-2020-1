import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Badges from "./pages/Badges/Badges";
import Users from "./pages/Users/Users";
import { Redirect, Route, Switch } from "react-router";
import Badge from "./pages/Badge/Badge";

interface AppProps {}

class App extends Component<AppProps> {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/badges" component={Badges} />
          <Route path="/badge/:id" component={Badge} />
          <Route path="/badge" component={Badge} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
