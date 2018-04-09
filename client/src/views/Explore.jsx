import React from 'react'
import './Explore.css'
import MapContainer from '../components/MapContainer'
import TwitterFeed from '../components/TwitterFeed'
import Weather from '../components/Weather'
import cityData from '../cityData.json'
import dotenv from 'dotenv'
dotenv.config()

const api_key = process.env.REACT_APP_WEATHER_API_KEY

class Explore extends React.Component {
    state = {
        randomCity: cityData[ Math.floor(Math.random() * 7323)]
      }
    
    render(){
        return (
            <div className='Explore'>
                <h1>GLOBALink</h1>
                <div id='MapContainer'>
                    <MapContainer randomCity={this.state.randomCity} />
                </div>
                <div>
                <h2>{this.state.randomCity.city}, {this.state.randomCity.country} </h2>
                </div>
                <TwitterFeed randomCity={this.state.randomCity}/>
                <Weather randomCity={this.state.randomCity} api_key={api_key}/>
            </div>
        )
    }

}

export default Explore