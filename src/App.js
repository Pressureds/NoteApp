// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddNote from './pages/AddNote';

const App = () => {
  return (
    <Router>
      <div>
        <nav className="bg-blue-500 p-4 text-white">
          <ul>
            <li className="inline-block mx-2">
              <Link to="/">Home</Link>
            </li>
            <li className="inline-block mx-2">
              <Link to="/add">Add Note</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add" component={AddNote} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
