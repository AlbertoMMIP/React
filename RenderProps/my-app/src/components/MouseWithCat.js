import React, {Component} from 'react';
import {Cat} from './Cat';

class MouseWithCat extends Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            We could just swap out the <p> for a <Cat> here ... but then
            we would need to create a separate <MouseWithSomethingElse>
            component every time we need to use it, so <MouseWithCat>
            isn't really reusable yet.
          */}
          <p>H</p>
          {/* <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
          <Cat mouse={this.state} />
        </div>
      );
    }
  }

  export default MouseWithCat;