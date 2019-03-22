import React, {Component} from 'react';

class Mouse extends Component {
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

            {/* ...but how do we render something other than a <p>? 
            <p>The current mouse position is ({this.state.x}, {this.state.y})</p>*/}
            {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
            */}
            <p>Perro</p>

            {this.props.render(this.state)}
        </div>
        );
    }
} 

export default Mouse;