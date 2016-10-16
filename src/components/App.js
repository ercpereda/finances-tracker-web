import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import Accounts from './Accounts';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import AccountForm from './AccountForm';

import accountTypes from '../models/account-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <AccountForm types={Object.keys(accountTypes).map(key => accountTypes[key])} />
      </div>
    );
  }
}

export default App;
