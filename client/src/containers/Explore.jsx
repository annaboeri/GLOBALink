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
          const { cities } = this.props
          this.props.generateRandomCity(cities)
      } 
      
    render(){
        if(!this.props.randomCity){
            return (
                <div>
                    <h3 className="exploreHeading">
                        Click the globe to explore a new city!
                    </h3>
                    <div className="gifContainer">
                        <img onClick={this.handleClick.bind(this)} src="https://i.gifer.com/W31X.gif" className="globeGiphy"/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='ExploreContainer'>
                <h3 className="exploreHeading"><IoAndroidGlobe className="globeIcon" onClick={this.handleClick.bind(this)} size={60}/>
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
                    
                    <div className="row">
                        <div className="column">
                            <TwitterFeed />
                        </div>
                    </div> 
                    <div className="row">
                        <div className="column">
                            <div>
                                <CountryInfo />
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className="weatherDiv">
                            <Weather />
                        </div>
                        <div className="placesDiv">
                            <GooglePlaces />
                        </div>
                    </div> 
                </div>
            )
        }
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
