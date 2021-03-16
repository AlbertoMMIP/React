import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForcastExtended from './../components/ForcastExtended'

class ForcastExtendedContainer extends Component {


  render() {
    const { city, forecastData } = this.props
    if(!city && !forecastData) {
      return (
        <div>Sin ciudad</div>
      );
    }
    return (
      <ForcastExtended city={ city } forecastData={ forecastData }></ForcastExtended>
    );
  }
}

ForcastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired
};

const mapStatetoProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData })


export default connect(mapStatetoProps, null)(ForcastExtendedContainer);