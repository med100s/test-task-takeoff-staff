import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import AsyncLogin from './components/Login';
import AsyncContacts from './components/Contacts';

const App = () => (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contacts">Contacts</Link></li>
        </ul>
        <Route exact path="/" component={AsyncLogin} />
        <Route path="/Contacts" component={AsyncContacts} />
      </div>
    </Router>
);

export default App;
