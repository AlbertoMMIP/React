import React, {Component} from 'react';
import Mouse from './Mouse';
import { Cat } from './Cat';


class MouseTracker extends Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => <Cat mouse={mouse} />} />
        </div>
      );
    }
  }

  export default MouseTracker;