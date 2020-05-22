import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login_ym from './pages/login/Login_ym';
import Signup_ym from './pages/signup/Signup_ym';
import Main_ym from './pages/main/Main_ym';



class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login_ym} />
          <Route exact path="/signup" component={Signup_ym} />
          <Route exact path="/main" component={Main_ym} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;