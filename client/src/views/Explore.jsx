import React from 'react'
import MapContainer from '../components/MapContainer'
import cityData from '../cityData.json'
import './Explore.css'

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
            </div>
        )
    }

}

export default Explore