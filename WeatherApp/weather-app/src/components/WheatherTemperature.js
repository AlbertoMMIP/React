import React from 'react';
import WeatherIcons from 'react-weathericons';
const icons = {
    sunny: 'day-sunny',
    fog: 'day-fog'
}
const getWeatherIcon = weatherState => {
    let icon = icons[weatherState];
    if(icon === undefined) icon = 'day-sunny';
    return <WeatherIcons name={icon} size="2x" />
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature}  Cº`}</span>
    </div>
);

export default WeatherTemperature;