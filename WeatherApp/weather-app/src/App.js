import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';


const cities = [
  'Washington,us',
  'Bogota,col',
  'Mexico,mx',
  'Barcelona,es',
  'Madrid,es',
  'Lima,pe',
  'Buenos Aires,ar'
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">     
          <LocationList cities={cities} />
        </header>
      </div>
    );
  }
}

export default App;
