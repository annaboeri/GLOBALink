import React from 'react'
import { connect } from 'react-redux'
import { generateRandomCity } from '../actions/index'
import { bindActionCreators } from 'redux'
import '../styles/Explore.css'
import CityInfo from '../containers/CityInfo'
import MapContainer from '../containers/MapContainer'
import TwitterFeed from '../containers/TwitterFeed'
import Weather from '../containers/Weather'
import GooglePlaces from '../containers/GooglePlaces'
import CountryInfo from '../containers/CountryInfo'
import {IoAndroidGlobe} from 'react-icons/lib/io'


class Explore extends React.Component {
    
    handleClick(){
          //window.location.reload()
          const { cities } = this.props
          this.props.generateRandomCity(cities)
      } 
      
    

    render(){
        const { randomCity } = this.props
        console.log(randomCity)
        return (
            <div className='Explore container'>
               <h3><IoAndroidGlobe onClick={this.handleClick.bind(this)} size={60}/>
                    Click the globe to explore a new city!
                </h3>
                <div className="row">
                    <div className="column">
                        <div id='MapContainer'>
                            <MapContainer />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <CityInfo />
                    </div>
                </div>
                {/*
                <div className="row">
                    <div className="column">
                        <TwitterFeed randomCity={randomCity}/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div>
                            <CountryInfo randomCity={randomCity} />
                        </div>
                    </div>
                </div>

           
                <div className="row">
                    <div className="column column-20 weatherDiv">
                        <Weather randomCity={randomCity} />
                    </div>
                    <div className="column placesCol">
                        <div className="placesDiv column column-80">
                            <GooglePlaces randomCity={randomCity} />
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }

}

// whatever is returned will show up as props inside of Explore
// this.props.randomCity
function mapStateToProps(state) {
    return {
      cities: state.cities,
      randomCity: state.randomCity
    }
  }

// Whenever generateRandomCity is called, the result should be passed to all reducers 
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ generateRandomCity: generateRandomCity }, dispatch)
}


  
export default connect(mapStateToProps, mapDispatchToProps)(Explore)
