import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {

    constructor(){
        super();
        this.state = {
            form:{
                title: "",
                author: "",
                body: ""
            }
        }
    }

    handleChange = (e) => {
        const {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;

        this.setState({form});
        console.log(form);
    };

    handleSubmit = (e) => {
        const base_url = "http://localhost:3000/api";
        e.preventDefault();

        let url = this.props.match.params.id ? `${base_url}/post/${this.props.match.params.id}` : `${base_url}/post`;
        let verb = this.props.match.params.id ? 'patch' : 'post';
        const {form} = this.state;
        axios[verb](url,form )
            .then(() => {
                this.props.history.push("/");
            })
            .catch(err => {
                console.log(err);
                alert(err.msg);
            })
    };

    componentWillMount() {
        if(!this.props.match.params.id) return;

        let base_url = "http://localhost:3000/api";
        axios.get(`${base_url}/post/${this.props.match.params.id}`)
            .then(res => {
                const {post} = res.data;
                this.setState({form:post})
            })
    };

    render(){
        let {title, author, body} = this.state.form;
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="title">Title
                            <input onChange={this.handleChange} type="text" id="title" name="title" value={title} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="author">Author
                            <input onChange={this.handleChange} type="text" id="author" name="author" value={author} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="body">
                            <textarea onChange={this.handleChange} name="body" id="body" cols="50" rows="10" placeholder="Escribe some" value={body} ></textarea>
                        </label>
                    </div>
                    <button type="submit">Click!</button>
                </form>
            </div>
        );
    }
}

export default Form;