import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            users: ["Peter","Gus","Beto","Mena"],
            characters:[]
        }
    }

    redirectToLogin = () => {
        this.props.history.push("/login");
    }

    componentWillMount() {
        let {characters} = this.state;
        const base_url = 'https://swapi.co/api/';

        axios.get(`${base_url}people/`)
            .then(res => {
                characters=res.data.results;
                this.setState({characters});
                //console.log(res);
        })
    }

    render(){
        const {users, characters} = this.state;
        return(
            <div>
                <h1>Hola <button onClick={this.redirectToLogin}>De nuevo al login</button> </h1>
                {
                    users.map((user,index) => <Link
                        to={`/loquesea/${user}`}
                    key={index} >{user} </Link> )
                }
                {
                    characters.map((character,index) => <Link
                    to={`/loquesea/${index+1}`}
                    key={index} >{character.name} </Link> )
                }
            </div>
        );
    }
}

export default Home;