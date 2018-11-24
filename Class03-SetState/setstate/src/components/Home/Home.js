import React, {Component} from 'react';
import TemperatureField from './TemperatureField';
class Home extends Component{

    constructor(){
        super();
        this.state= {
            temperature: 0,
            scale:"c"
        }
    }

    toCelsius = (temperature) => {
        if(isNaN(temperature)) return;
        return  (temperature -32 ) *5 / 9;
    };

    toFahrenheit = (temperature) => {
        if(isNaN(temperature)) return;
        return (temperature * 9 / 5) + 32;
    };
    toKelvin = (temperature) => {
        if(isNaN(temperature)) return;
        return temperature + 273.15;
    };

    handleChange = (e) => {
        let {scale, temperature} = this.state;
        scale = e.target.name;
        temperature = e.target.value;
        this.setState({scale,temperature}, () => { console.log("complete") });
    };

    render(){
        const  {scale,temperature} = this.state;
        const fahrenheit =  (scale === "c" ? this.toFahrenheit(temperature) : temperature );
        const celsius = (scale === "f" ? this.toCelsius(temperature) : temperature);
        const kelvin = (scale === "c" ? this.toKelvin(temperature) : (scale === "f" ? this.toKelvin(0) + this.toCelsius(temperature)  : temperature));

        return(
            <div>
                <h1>Calculadora de temperatura</h1>
                <TemperatureField scale="c" handleChange={this.handleChange} temp={celsius} />
                <TemperatureField scale="f" handleChange={this.handleChange} temp={fahrenheit}  />
                <TemperatureField scale="k" handleChange={this.handleChange} temp={kelvin}  />
            </div>
        );
    }
}

export default Home;