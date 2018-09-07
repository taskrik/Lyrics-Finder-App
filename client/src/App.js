import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/track/lyrics/:id" component={Lyrics} />
        </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
