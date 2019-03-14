import React, {Component} from 'react';
import  Item from './Item';
import Selected from './Selected';
import Corona from "./Corona";
import Form from "./Form";
import styles from './Home.module.css';
import './Form.css';

class  Home extends Component{

    constructor(){
        super();
        this.state = {
            dirty: false,
            form:{
                name:"",
                age:0
            },
            show: false,
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
    toggleBlock = () => {
        let  {show} = this.state;
        show = !show;
        this.setState({show});
    };
    deleteItem = (index) => {
      let {data} = this.state;
      data = data.filter((item,inx) => index !== inx);
      this.setState({data});
    };
    handleChange = (e) =>{
        let {form,dirty} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        dirty = true;
        this.setState({form,dirty});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let {form,data} = this.state;
        data.push(form);
        this.setState({data});
        console.log("log =>", form);
    };

    render(){
        const {form,data,dirty} = this.state;
        return(
            <div>
                <div className={styles.container}>
                    <h1>Home</h1>
                    <ul>
                        {data.map((item,index) => <Item deleteItem={this.deleteItem} hadleClick={this.handleClick} key={index} item={item} index={index} /> )}
                    </ul>
                    <div>
                        <Selected selection={this.state.selection} />
                    </div>
                    <button onClick={this.toggleBlock}>Picale</button>
                    {this.state.show ? <Corona/> : <div>Sin data</div>}
                </div>
                <div>
                    <Form data={form} handleSubmit={this.handleSubmit} handleChange={this.handleChange} dirty={dirty} />
                </div>
            </div>
        );
    }
}

export default Home;