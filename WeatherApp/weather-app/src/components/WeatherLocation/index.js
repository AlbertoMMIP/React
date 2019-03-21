import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import {api_weather} from './../../constants/api_url';
import './styles.css';

class WeatherLocation extends  Component {

    constructor(){
        super();
        this.state = {
            city:'Mexico',
            data: null
        };
    }

    componentDidMount(){
        this.handleUpdateClick();
    }
    
    handleUpdateClick = () => {
        fetch(api_weather)
            .then(res => {
                return res.json();
            }).then(data => {
                const newWeather = transformWeather(data);
                console.log(newWeather)
                //debugger; 
                this.setState({data:newWeather})
            })
            .catch(err => {
                console.log(err);
            })
    }

    render(){
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city} />
                {data ? 
                    <WeatherData data={data} /> :
                'cargando . . .'}                
            </div>
        );
    }
    
};

export default WeatherLocation;