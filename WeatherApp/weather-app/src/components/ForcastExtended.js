import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
import './Styles.css';


const days = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
const data = {
  temperature:0,
  weatherState:'',
  humidity: 0,
  wind:''

}
class ForcastExtended extends Component {

  renderForcastItemDays() {
    return days.map(day => <ForcastItem key={day} weekDay={day} hour={10} data={data} />);
  }

  render(){
    const {city} = this.props;
    return(
      <div>
        <h2 className='forecast-title' >Pronósticoo extendido para {city}</h2>
        {this.renderForcastItemDays() }
      </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForcastExtended;