import React from 'react';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import './../../App.css';
function Home(){
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Welcom to the plan subscriptions
        </p>
        <Link to='/subs'><Button variant="contained" color="primary">Choose plan</Button></Link>  
      </div>
    </div>
  );  
}

export default Home;