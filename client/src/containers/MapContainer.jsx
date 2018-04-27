import React from 'react'
import { connect } from 'react-redux'
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends React.Component{
    
  render(){
    console.log(this.props.randomCity)
    if (!this.props.google) {
      return <div>Loading Map...</div>;
    }
    const style = {
      width: '1000px',
      height: '500px'
    }
    if(this.props.randomCity){
      console.log(this.props.randomCity.randomCity.lat)
    return(
      <Map 
        google={this.props.google}
        style={style}
        initialCenter={{
          lat: this.props.randomCity.randomCity.lat, 
          lng: this.props.randomCity.randomCity.lng
        }}
        zoom={14}
        id="map"
        mapTypeControl={true} 
        mapType="satellite"
      >
      </Map>
    )
  }
  else return null
  }
}

const WrappedContainer = GoogleApiWrapper({
  apiKey: "AIzaSyAB9C4pOhc3eeBEdyPpvYzXrg0aDjPgzC0"
})(MapContainer)

function mapStateToProps(state) {
  return {
    randomCity: state.randomCity
  }
}

export default connect(mapStateToProps)(WrappedContainer)