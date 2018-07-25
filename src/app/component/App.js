import React, { Component } from 'react';
import Login from './login';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import sha256 from 'crypto-js/sha256';

const salt = 'entropy';
class App extends Component {
  constructor() {
    super();
    // Store Json into Session Storage
    let storedJson = {
      "email": "julijaiswal1@gmail.com",
      "password": 123456
    }
    storedJson.password = sha256(storedJson.password + salt);
    storedJson = JSON.stringify(storedJson);
    localStorage.setItem('userObj', storedJson);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/Login' component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
