import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserRegistration from './components/UserRegistration'
import UserRegistrationSuccess from './components/UserRegistrationSuccess'
import UserLogin from './components/UserLogin'
import UserDashboard from './components/UserLogin'
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register-user" component={UserRegistration} />
        <Route
          path="/register-user/success"
          component={UserRegistrationSuccess}
        />
        <Route path="/login-user" component={UserLogin} />
        <Route path="/user-dashboard" component={UserDashboard} />
        <Route path="/movie-detail" component={MovieDetail} />
      </Switch>
    </div>
  );
}

export default App;
