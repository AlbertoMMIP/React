import React from "react";

const Child = ({handleClick}) => (
  <div>El componente hijo recibio a 
  <p></p>
  <button onClick={handleClick} >Click here!</button>
  </div>
);


export default Child;