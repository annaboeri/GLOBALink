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
            console.log(serverResponse.data)
            console.log(serverResponse.data.weather[0].main)
            this.setState({
                cityWeather: serverResponse.data.weather[0].main,
                cityTemp: serverResponse.data.main.temp,
                cityHumidity: serverResponse.data.main.humidity
            })
        })
    }

    render(){
        return(
            <div className="Weather">
            <h3>Current Weather</h3>
            <h4>{this.state.cityWeather}</h4>
            <h4>{this.state.cityTemp} F</h4>
            <h4>{this.state.cityHumidity}% Humidity</h4>
            </div>
        )
    }
}

export default Weather