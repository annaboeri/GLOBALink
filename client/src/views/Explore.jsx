import React from 'react'
import './Explore.css'
import MapContainer from '../components/MapContainer'
import TwitterFeed from '../components/TwitterFeed'
import Weather from '../components/Weather'
import GooglePlaces from '../components/GooglePlaces'
import cityData from '../cityData.json'


class Explore extends React.Component {
    state = {
        randomCity: cityData[ Math.floor(Math.random() * 7323)]
      }
    
    render(){
        return (
            <div className='Explore container'>
                <h1>GLOBALink</h1>
                <div className="row">
                    <div className="column">
                        <div id='MapContainer'>
                            <MapContainer randomCity={this.state.randomCity} />
                        </div>
                        <div>
                            <h2>{this.state.randomCity.city} </h2>
                            <h3>Location: {this.state.randomCity.province}, {this.state.randomCity.country}</h3>
                            <h3>Population: {this.state.randomCity.pop}</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <TwitterFeed randomCity={this.state.randomCity}/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <Weather randomCity={this.state.randomCity} />
                    </div>
                    <div className="placesDiv column column-80">
                        <GooglePlaces randomCity={this.state.randomCity} />
                    </div>
                </div>
            </div>
        )
    }

}

export default Explore