import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcom to the plan subscriptions
        </p>
        <Button variant="contained" color="primary">Choose plan</Button>
      </header>
    </div>
  );
}

export default App;
