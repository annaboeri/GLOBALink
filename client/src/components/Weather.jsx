import React from 'react'
import axios from 'axios'

const httpClient = axios.create()

class Weather extends React.Component{
componentWillMount(){
        httpClient({ method: 'get', url: `http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=${this.props.api_key}&units=imperial`}).then((apiResponse) => {
                console.log(apiResponse)
            })
        }

    render(){
        console.log(this.props.api_key)
        return(
            <div className="Weather">
                <h3>Current Weather</h3>
            </div>
        )
    }
}

export default Weather