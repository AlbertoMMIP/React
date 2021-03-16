import React from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
import './Styles.css';

const renderForcastItemDays = (forecastData) => {
  return forecastData.map(forcast => (
    <ForcastItem key={`${forcast.weekDay}${forcast.hour}`}
          weekDay={forcast.weekDay} 
          hour={forcast.hour} 
          data={forcast.data} />
  ));
}

const renderProgress = () => {
  return <h3>Cargando pronstico extedido...</h3>
}


const ForcastExtended = ({ city, forecastData }) => (
  <div>
    <h2 className='forecast-title' >Pronósticoo extendido para {city}</h2>
    {forecastData ? 
      renderForcastItemDays(forecastData) : 
      renderProgress() }
  </div>
)

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
}

export default ForcastExtended;