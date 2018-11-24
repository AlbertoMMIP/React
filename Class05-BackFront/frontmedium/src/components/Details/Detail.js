import React, {Component} from 'react';
import axios from 'axios';

class Detail extends Component{

    constructor(){
        super();
        this.state = {
            post:{}
        }
    }

    componentWillMount(){
        let base_url = "http://localhost:3000/api"
        axios.get(`${base_url}/post/${this.props.match.params.id}`)
            .then(res => {
                const {post} = res.data;
                this.setState({post})
            })
    }

    render(){
        const {post} = this.state;

        return(
            <div>
                <h1>{post.title}</h1>
            </div>
        );
    }
}

export default Detail;