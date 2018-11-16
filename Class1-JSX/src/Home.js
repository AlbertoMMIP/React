import React, {Component} from "react";
import Child from './Child';


class Home extends Component{

  state = {
    data : ['morro1','morro2','morro3'],
    count : 0,
    str: "",
    perro:""
  }

  componentWillMount(){
    let perro = localStorage.getItem("namePerro");
    let {count,str} = this.state;
    count ++;
    str += "*";
    this.setState({count,str,perro});
  }

  handleClick = () => {
    let perro = "Guardian";
    localStorage.setItem("namePerro",perro);
  }

  render(){
    
    return(
      <div>
        <strong>{this.state.count}</strong>
        <h3><strong>{this.state.str}</strong></h3>
        <h1>Que show el perro se llama {this.state.perro}</h1>
        <p>Y amigo </p>
        <Child 
          data={this.state.data}
          handleClick={this.handleClick} 
        />
      </div>
    );
  }
}

export default Home;