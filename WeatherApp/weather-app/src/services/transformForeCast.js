import moment from 'moment';
import 'moment/locale/es';
import transformWeather from "./transformWeather";

export const transformForecast = data => (
  data.list.filter(item => (
    moment.unix(item.dt).hour() === 10 ||
    moment.unix(item.dt).hour() === 16 ||
    moment.unix(item.dt).hour() === 22
  )).map(item => (
    {
      weekDay: moment.unix(item.dt).format('ddd'),
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item),
    }
  ))
); 