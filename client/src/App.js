import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/Lyrics-Finder-App/" component={Index} />
              <Route exact path="/Lyrics-Finder-App/track/lyrics/:id" component={Lyrics} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
