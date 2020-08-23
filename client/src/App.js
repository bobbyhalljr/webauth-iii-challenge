import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';
import PrivateRoute from './components/PrivateRoute';


function App(props) {
  return (
    <div>
      <div className="App">
        {/* <SignIn /> */}
      </div>
      
      <Route exact path='/api/auth/register' render={props => <Register {...props} />} />
      <Route exact path='/api/auth/login' render={props => <Login {...props} />} />
      <PrivateRoute exact path='/api/users' render={props => <Users {...props} />} />
    </div>
  );
}

export default App;
