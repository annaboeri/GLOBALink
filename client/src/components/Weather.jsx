import React from 'react'
import httpClient from '../httpClient'
import './Weather.css'

class Weather extends React.Component{

    state = {
        cityWeather: "",
        cityTemp: "",
        cityHumidity: "",
        weatherIconSrc: ""
    }

    componentDidMount(){
        httpClient.getWeather(this.props.randomCity.city).then((serverResponse) => {
            const icon = serverResponse.data.weather[0].icon
            this.setState({
                cityWeather: serverResponse.data.weather[0].main,
                cityTemp: serverResponse.data.main.temp,
                cityHumidity: serverResponse.data.main.humidity,
                weatherIconSrc: `http://openweathermap.org/img/w/${icon}.png`
            })
        })
    }

    render(){
        const { cityWeather, cityTemp, cityHumidity, weatherIconSrc } = this.state
        if(cityWeather !== "" || cityTemp !== "" || cityHumidity !== ""){
            return(
                <div className="Weather">
                    <h3>Current Weather:</h3>
                    <img className="weatherIcon" src={weatherIconSrc} alt="weather icon" />
                    <div className="weatherType">{cityWeather}</div>
                    <div>{cityTemp}&deg; F</div>
                    <div>{cityHumidity}% Humidity</div>
                </div>
            )
        }
        return (
            <div className="Weather">
                <h3>No Weather Data Available</h3>
            </div>
        )
    }
}

export default Weather