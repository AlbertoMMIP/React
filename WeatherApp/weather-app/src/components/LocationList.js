import React from 'react';
import WeatherLocation from './WeatherLocation';
import {PropTypes} from 'prop-types';

const LocationList = ({cities}) => {
    return(
        <div>
            {cities.length > 0 ?
                cities.map((city, idx) => <WeatherLocation key={idx} city={city}/> ) :
                null
            }
        </div>
    )};

Location.propTypes = {
    cities : PropTypes.array.isRequiered,
}

export default LocationList;