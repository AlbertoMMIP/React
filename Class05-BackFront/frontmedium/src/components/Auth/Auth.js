import React, {Component} from 'react';
import {login} from "../../service";

class Auth extends Component{

    constructor(){
        super();
        this.state = {
            user:{
                email:"",
                password:"",
                confirmPassword:""
            }
        }
    }

    handleChange = (e) => {
        const {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;

        this.setState({user})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        login(this.state.user, this.props.history);
    }



    render() {
        let{ email, password, confirmPassword} = this.state;
        return (

            <form onSubmit={this.handleSubmit} >
                <div>
                    <label htmlFor="">Email
                        <input type="email" onChange={this.handleChange} value={email} name="email" placeholder="ejemplo@ejemplo.com"/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">Password
                        <input type="password" onChange={this.handleChange} name="password" value={password}/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">Confirm Password
                        <input type="password" onChange={this.handleChange} name="confirmPassword" value={confirmPassword} />
                    </label>
                </div>
                <button type="submit">login</button>
            </form>
        );
    }
}

export default Auth;