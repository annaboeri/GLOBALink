import React from 'react'
import { Link } from 'react-router-dom'
import './Explore.css'
import MapContainer from '../components/MapContainer'
import TwitterFeed from '../components/TwitterFeed'
import Weather from '../components/Weather'
import GooglePlaces from '../components/GooglePlaces'
import LocalTime from '../components/LocalTime'
import cityData from '../cityData.json'
import {IoEarth} from 'react-icons/lib/io'



class Explore extends React.Component {
    state = {
        randomCity: this.randomCity(cityData, 7323)
      }

      randomCity(citiesArr, arrLength){
          let city = citiesArr[Math.floor(Math.random() * arrLength)]
          return city
      }

      handleClick(){
          window.location.reload()
      }

    render(){
        const { randomCity } = this.state
        console.log(randomCity)
        return (
            <div className='Explore container'>
               <h3 onClick={this.handleClick.bind(this)}>Click here to explore a new city!</h3>
                <div className="row">
                    <div className="column">
                        <div id='MapContainer'>
                            <MapContainer randomCity={randomCity} />
                        </div>
                        <div>
                            <h2><IoEarth className="EarthIcon" />{randomCity.city} </h2>
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