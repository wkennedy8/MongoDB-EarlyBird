import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import AddUser from './components/AddUser';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/add" component={AddUser} />
        <Route exact path="/user/:id" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
