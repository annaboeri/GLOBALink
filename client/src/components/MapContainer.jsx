import React from 'react'
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component{

  render(){
    console.log(this.props.randomCity)
    const style = {
      width: '1000px',
      height: '500px'
    }
    return(
      <Map 
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.randomCity.lat,
          lng: this.props.randomCity.lng
        }}
        zoom={15}
        onClick={this.onMapClicked}
        id="map"
      >
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.props.randomCity.city}, {this.props.randomCity.country}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAB9C4pOhc3eeBEdyPpvYzXrg0aDjPgzC0"
})(MapContainer)




