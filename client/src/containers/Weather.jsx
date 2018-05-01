import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'
import httpClient from '../httpClient'
import '../styles/Weather.css'

class Weather extends React.Component{


    componentDidUpdate(){
        if(this.props.weather === null){
        this.props.fetchWeather(this.props.randomCity)
        }
    }

    render(){
        if(this.props.weather){
            const { weather } = this.props
            console.log(weather)
            const cityWeather = weather.weather[0].main
            const cityTemp = weather.main.temp
            const cityHumidity = weather.main.humidity
            const icon = weather.weather[0].icon
            const weatherIconSrc = `http://openweathermap.org/img/w/${icon}.png`
            return(
                <div className="Weather">
                    <h3>Current Weather:</h3>
                    <img className="weatherIcon" src={weatherIconSrc} alt="weather icon" />
                    <div className="weatherInfo">{cityWeather}</div>
                    <div className="weatherInfo">{cityTemp}&deg; F</div>
                    <div className="weatherInfo">{cityHumidity}% Humidity</div>
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

function mapStateToProps(state) {
    return {
      randomCity: state.randomCity,
      weather: state.weather
    }
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
