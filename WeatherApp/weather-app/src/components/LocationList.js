import React from 'react';
import WeatherLocation from './WeatherLocation';
import {PropTypes} from 'prop-types';
import './Styles.css';


const LocationList = ({cities,onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log('handleWeatherLocationClick');
        onSelectedLocation(city);
    };
    const strToComponent = cities => (
        cities.map((city, idx) => 
                    (<WeatherLocation 
                        key={city} 
                        city={city}
                        onWeatherLocationClick={() => handleWeatherLocationClick(city)} />) )
    )
    return(
        <div className='locationlist'>
            {cities.length > 0 ?
                strToComponent(cities) :
                null
            }
        </div>
    )};

Location.propTypes = {
    cities : PropTypes.array.isRequiered,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;