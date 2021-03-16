import { getUrlForeCastByCity } from '../services/getUrlWeatherbyCity';
import { transformForecast } from '../services/transformForeCast';
export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

const setCity = value => ({type: SET_CITY, value});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {

  return async dispatch => {
    const url_forecast = getUrlForeCastByCity(payload);

    dispatch(setCity(payload));

    const data = await fetch(url_forecast);
    const weather_data = await data.json();
    const forecastData = transformForecast(weather_data);
    dispatch(setForecastData({ city: payload, forecastData }));
  };
};
