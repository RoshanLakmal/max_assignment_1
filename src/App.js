import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    users: [{ username: 'Roshan' }, { username: 'Lakmal' }]
  };

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <UserOutput username="Roshan"></UserOutput>
        <UserOutput username="Lakmal"></UserOutput>
      </div>
    );
  }
}

export default App;
