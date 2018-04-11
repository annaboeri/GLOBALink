import React from 'react'
import './Explore.css'
import MapContainer from '../components/MapContainer'
import TwitterFeed from '../components/TwitterFeed'
import Weather from '../components/Weather'
import GooglePlaces from '../components/GooglePlaces'
import LocalTime from '../components/LocalTime'
import cityData from '../cityData.json'


class Explore extends React.Component {
    state = {
        randomCity: cityData[ Math.floor(Math.random() * 7323)]
      }

    render(){
        const { randomCity } = this.state
        return (
            <div className='Explore container'>
                <h1>GLOBALink</h1>
                <div className="row">
                    <div className="column">
                        <div id='MapContainer'>
                            <MapContainer randomCity={randomCity} />
                        </div>
                        <div>
                            <h2>{randomCity.city} </h2>
                            <h3>Location: {randomCity.province}, {randomCity.country}</h3>
                            <h3>Population: {randomCity.pop.toLocaleString('en')}</h3>
                        </div>
                        <LocalTime randomCity={randomCity} /> 
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <TwitterFeed randomCity={randomCity}/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Weather randomCity={randomCity} />
                    </div>
                    <div className="placesDiv column column-80">
                        <GooglePlaces randomCity={randomCity} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Explore