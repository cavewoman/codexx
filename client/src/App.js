import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MemberContainer from './components/members/MemberContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MemberContainer />
      </div>
    );
  }
}

export default App;
