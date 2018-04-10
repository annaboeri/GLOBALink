import React from 'react'
import httpClient from '../httpClient'

class Weather extends React.Component{

    state = {
        cityWeather: "",
        cityTemp: "",
        cityHumidity: ""
    }

    componentWillMount(){
        httpClient.getWeather(this.props.randomCity.city).then((serverResponse) => {
            this.setState({
                cityWeather: serverResponse.data.weather[0].main,
                cityTemp: serverResponse.data.main.temp,
                cityHumidity: serverResponse.data.main.humidity
            })
        })
    }

    render(){
        if(this.state.cityWeather !== "" || this.state.cityTemp !== "" || this.state.cityHumidity !== ""){
            return(
                <div className="Weather">
                    <h3>Current Weather</h3>
                    <h4>{this.state.cityWeather}</h4>
                    <h4>{this.state.cityTemp}&deg; F</h4>
                    <h4>{this.state.cityHumidity}% Humidity</h4>
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