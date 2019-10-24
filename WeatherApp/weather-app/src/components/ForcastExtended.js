import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getUrlForeCastByCity} from './../services/getUrlWeatherbyCity';
import {transformForecast} from './../services/transformForeCast';
import ForcastItem from './ForcastItem';
import './Styles.css';

/* 
const days = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
const data = {
  temperature:0,
  weatherState:'',
  humidity: 0,
  wind:''

} */
class ForcastExtended extends Component {

  constructor(props){
    super(props);
    this.state = {
      forecastData:null,
    }
  }

  componentDidMount() {
    const {city} = this.props;
    this.updateCity(city);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.city !== this.props.city){
      this.setState({forecastData:null})
      this.updateCity(nextProps.city);
    }
  }
  
  
  updateCity = city =>{
    const api_weather = getUrlForeCastByCity(city);
    fetch(api_weather).then(
        data => (data.json())
      ).then(
        weatherData => {
          console.log(weatherData);
          const forecastData = transformForecast(weatherData);
          console.log(forecastData);
          
          this.setState({forecastData})
        })
  }

  renderForcastItemDays(forecastData) {
    return forecastData.map(forcast => (
      <ForcastItem key={`${forcast.weekDay}${forcast.hour}`}
            weekDay={forcast.weekDay} 
            hour={forcast.hour} 
            data={forcast.data} />
    ));
  }
  renderProgress(){
    return <h3>Cargando pronstico extedido...</h3>
  }

  render(){
    const {city} = this.props;
    const {forecastData} = this.state;
    return(
      <div>
        <h2 className='forecast-title' >Pronósticoo extendido para {city}</h2>
        {forecastData ? 
          this.renderForcastItemDays(forecastData) : 
          this.renderProgress() }
      </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForcastExtended;