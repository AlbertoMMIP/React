import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ForcastExtended extends Component {
  render(){
    const {city} = this.props;
    return(
      <div style={{color:'white'}} >Pronostico extendido para {city} </div>
    );
  }
}

ForcastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForcastExtended;