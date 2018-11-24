import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import NavLink from "react-router-dom/es/NavLink";

class App extends Component {

  constructor(){
    super();
    this.state = {
        count: 100
    }
  }

  handleClick = () => {
    let {count} = this.state;
    count ++;
    this.setState({count});
  }

  render() {
    return (
      <div className="App">
        <nav>
            <NavLink exact to="/" activeClassName='active-route' style={{marginRight:"2%"}} >Home</NavLink>
            <NavLink to="/login" activeClassName='active-route' >Login</NavLink>
        </nav>
        <strong>{this.state.count}</strong>
        <button onClick={this.handleClick} >Picale</button>
        <Router />
      </div>
    );
  }
}

export default App;
