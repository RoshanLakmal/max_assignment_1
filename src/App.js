import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    users: [
      { username: 'Roshan', password: 'test' },
      { username: 'Lakmal', password: 'test' }
    ]
  };

  addPasswordHandler = event => {
    this.setState({
      users: [
        { username: 'Roshan', password: event.target.value },
        { username: 'Lakmal', password: event.target.value }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Test</h1>
        <UserInput
          username={this.state.users[0].username}
          changed={this.addPasswordHandler}
        ></UserInput>
        <UserOutput username={this.state.users[0].username}></UserOutput>
        <UserOutput username={this.state.users[1].username}></UserOutput>
      </div>
    );
  }
}

export default App;
