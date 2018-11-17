import React, {Component} from 'react';
import  Item from './Item';
import Selected from './Selected';
import styles from './Home.module.css';
class  Home extends Component{

    constructor(){
        super();
        this.state = {
            selection:{
                name:""
            },
            data:[
                {
                    name:"David",
                    age:21
                },{
                    name:"Peter",
                    age:19
                },
                {
                    name:"Mike",
                    age:5
                }
            ]
        }

    }
    handleClick = (selection) => {
        console.log(selection);
        this.setState({selection})
    };
    render(){
        return(
            <div className={styles.container}>
                <h1>Home</h1>
                <ul>
                    {this.state.data.map((item,index) => <Item hadleClick={this.handleClick} key={index} item={item}/> )}
                </ul>
                <div>
                    <Selected selection={this.state.selection} />
                </div>
            </div>
        );
    }
}

export default Home;