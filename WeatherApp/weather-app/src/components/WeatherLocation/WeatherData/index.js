import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from  './WheatherTemperature';
import {
    SUN,
} from './../../../constants/weather';
import './styles.css'
const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={20} weatherState={SUN} />
        <WeatherExtraInfo humidity={80} wind={'10 m/s'} />
    </div>
);

export default WeatherData;