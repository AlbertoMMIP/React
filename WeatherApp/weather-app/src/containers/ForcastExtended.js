import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers';
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
  city: PropTypes.string.isRequired
};

const mapStatetoProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) })


export default connect(mapStatetoProps, null)(ForcastExtendedContainer);