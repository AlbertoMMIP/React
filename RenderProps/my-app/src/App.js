import React, { Component } from 'react';
import './App.css';
import MouseTracker from './components/MouseTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MouseTracker />
        </header>
      </div>
    );
  }
}

export default App;
