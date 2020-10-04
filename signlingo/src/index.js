import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Home from "./screens/home";
import Logout from "./screens/logout";
import Landing from "./screens/landing";
import Dash from "./screens/landing";
import Level from "./screens/level";
import Level1 from "./screens/level1";
import Level2 from "./screens/level2";
import Level3 from "./screens/level3";
import Login from "./screens/login";
import Signup from "./screens/signup";




ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/level" component={Level} />
      <Route exact path="/level1" component={Level1} />
      <Route exact path="/level2" component={Level2} />
      <Route exact path="/level3" component={Level3} />
    </div>
  </Router>,
  document.getElementById("root")
);