import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    users: [
      { username: 'Roshan', password: 'password1' },
      { username: 'Lakmal', password: 'password2' }
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
          changed={this.addPasswordHandler}
          currentPassword={this.state.users[0].password}
        ></UserInput>
        <UserOutput
          username={this.state.users[0].username}
          password={this.state.users[0].password}
        ></UserOutput>
        <UserOutput
          username={this.state.users[1].username}
          password={this.state.users[1].password}
        ></UserOutput>
      </div>
    );
  }
}

export default App;
