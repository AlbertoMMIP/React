import React, {Component} from 'react';

class Detail extends Component{

    constructor(){
        super();
        this.state = {
            data : {}
        }
    }

    componentWillMount() {
        const base_url = 'https://swapi.co/api/';
        const {id} = this.props.match.params;
        let {data} = this.state;

        fetch(`${base_url}people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({data}))
    }


        render(){
        return (
            <div>
                <h1>La información del elemento seleccionado es: </h1>
                <label>Name: {this.state.data.name} </label>
                <label>Height: {this.state.data.height} </label>
                <label>Mass: {this.state.data.mass} </label>
                <label>Hair Color: {this.state.data.hair_color} </label>
                <label>Skin Color: {this.state.data.skin_color} </label>
            </div>
        );
    }
}

export default Detail;