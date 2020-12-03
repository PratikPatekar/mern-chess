import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Board from "./components/Board";
import UserInfo from "./components/UserInfo";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Board} />
            <Route path="/userinfo" component={UserInfo} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
