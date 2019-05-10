import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getUrlForeCastByCity} from './../services/getUrlWeatherbyCity';
import {transformForecast} from './../services/transformForeCast';
//import ForcastItem from './ForcastItem';
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
    const api_weather = getUrlForeCastByCity(city);
    fetch(api_weather).then(
        data => (data.json())
      ).then(
        weatherData => {
          console.log(weatherData);
          const forecastData = transformForecast(weatherData);
          this.setState({forecastData})
        })
  }
  

  renderForcastItemDays() {
    return <h1>Render item</h1>;
    //return days.map(day => <ForcastItem key={day} weekDay={day} hour={10} data={data} />);
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
          this.renderForcastItemDays() : 
          this.renderProgress() }
      </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForcastExtended;