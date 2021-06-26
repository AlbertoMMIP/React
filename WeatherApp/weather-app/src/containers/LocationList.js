import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component{

  componentDidMount() {
    const { setWeather, setSelectedCity, cities, city } = this.props;
    setWeather(cities);
    setSelectedCity(city)
  }

  handleSelectionLocation = city => {
    this.props.setSelectedCity(city);
  }

  render(){
    return(
      <div>
        <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelectionLocation} />
      </div>
    )
  }
}

LocationListContainer.propTypes = {
  setWeather: PropTypes.func.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  city: PropTypes.string.isRequired,
}

// Without bindActionCreators
// const mapDispatchToPropsActions = dispatch => ({
//   setCity: value => dispatch(setSelectedCity(value)),
//   setWeather: cities => dispatch(setWeather(cities))
// });
const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps =  state => ({ 
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
 })

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
