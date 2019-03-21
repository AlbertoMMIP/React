import convert from 'convert-units';
import {
    SUN,
} from './../constants/weather';

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(2);
};

const getWeatherState = weather_data =>{
    return SUN;
}

const transformWeather = weather_data => {
    const {humidity, temp} = weather_data.main;
    const {speed} = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp) * 1;
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
};

export default transformWeather;