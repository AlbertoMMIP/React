import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types'
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherbyCity';
import './styles.css';

class WeatherLocation extends  Component {

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null
        };
    }
    componentDidMount(){
        this.handleUpdateClick();
    }
    
    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather)
            .then(res => {
                return res.json();
            }).then(data => {
                const newWeather = transformWeather(data);
                //console.log(newWeather)
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
                <CircularProgress size={50} />}                
            </div>
        );
    }    
};
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}
export default WeatherLocation;