import React from 'react'
import MapContainer from '../components/MapContainer'
import cityData from '../cityData.json'

class Explore extends React.Component {
    state = {
        randomCity: cityData[ Math.floor(Math.random() * 7323)]
      }
    
    render(){
        return (
            <div className='Explore'>
                <h1>GLOBALink</h1>
                <MapContainer randomCity={this.state.randomCity} />
            </div>
        )
    }

}

export default Explore