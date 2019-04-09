import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Styles.css';

class ForcastExtended extends Component {
  render(){
    const {city} = this.props;
    return(
      <div>
        <h2 className='forecast-title' >Pronósticoo extendido para {city}</h2>
      </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForcastExtended;