import React from 'react'
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import cityData from '../cityData.json'

class MapContainer extends React.Component{
  state = {
    randomCity: cityData[ Math.floor(Math.random() * 7323)]
  }
  render(){
    console.log(this.props.google.maps)
    console.log(this.state.randomCity)
    const style = {
      width: '1000px',
      height: '500px'
    }
    return(
      <Map 
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.state.randomCity.lat,
          lng: this.state.randomCity.lng
        }}
        zoom={15}
        onClick={this.onMapClicked}
        id="map"
      >
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.randomCity.city}, {this.state.randomCity}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAB9C4pOhc3eeBEdyPpvYzXrg0aDjPgzC0"
})(MapContainer)




