import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE,
} from './../../../constants/weather';
import './styles.css';
const icons = {
    [CLOUD]: 'cloud',
    [THUNDER]: 'day-thunderstore',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [DRIZZLE]: 'day-shower'
}

const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];
    if(icon === undefined) icon = 'day-sunny';
    return <WeatherIcons className='wicon' name={icon} size="4x" />
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        {
            getWeatherIcon(weatherState)
        }
        <span className='temperature'>{`${temperature}`}</span>
        <span className='temperatureType'>{`Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired, 
};

export default WeatherTemperature;