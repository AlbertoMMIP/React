import React, { Component } from 'react';
import Home from './Home';
import './App.css';

class App extends Component {
  render() {
    const obj = {
      name: "Perro",
      age:  21,
      sexo: "Macho Alfa"
    }
    return (
      <div className="App">
        <Home name="Alberto" obj={obj} />
      </div>
    );
  }
}

export default App;
