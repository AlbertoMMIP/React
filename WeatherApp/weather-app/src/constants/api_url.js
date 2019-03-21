const location = 'Mexico,mx';
const api_key = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const base_url = 'https://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${base_url}?q=${location}&appid=${api_key}`;
