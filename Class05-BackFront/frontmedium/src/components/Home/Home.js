import React, {Component} from 'react';
import axios from 'axios';
import ListItem from "./ListDetail";

class Home extends Component{

    constructor(){
        super();
        this.state = {
            posts: []
        };
        this.base_url = "http://localhost:3000/api"

    }

    componentWillMount() {

        axios.get(`${this.base_url}/post/`)
            .then(res => {
                console.log(res.data);
                this.setState({posts:res.data.posts})
            })
    }

    deleteItem = (id) => {
        axios.delete(`${this.base_url}/post/${id}`)
            .then(() => {
                let {posts} = this.state;
                posts = posts.filter((post) => {
                    return post._id !== id;
                });
                this.setState({posts});

                alert("Eliminado correctamente");

            })
    }

    render(){
        const {posts} = this.state;
        return(

            <div>
                <h4>Lista de posts</h4>
                {posts.length > 0 ?
                    <ul>
                        {posts.map(post => <ListItem key={post._id} {...post} deleteItem={this.deleteItem} /> )}
                    </ul>         :
                    <strong>No hay nariz</strong>
                }
            </div>
        );
    }
}

export default Home;