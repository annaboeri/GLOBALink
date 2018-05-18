import React from 'react'
import { connect } from 'react-redux'
import LocalTime from './LocalTime'
import '../styles/CityInfo.css'
import {IoIosLocation, IoMap, IoPersonStalker} from 'react-icons/lib/io'


class CityInfo extends React.Component {

    render(){
        if(this.props.randomCity){
            const { randomCity } = this.props
            return (
                <div className="cityInfo">
                    <div className="row">
                        <div className="column">
                            <h2><IoIosLocation /><span>{randomCity.city}</span></h2>
                        </div>
                    </div>
                    <div className="cityinfo-container">
                        <div className="location-div">
                            <h3><IoMap /> {randomCity.province}, {randomCity.country}</h3>
                        </div>
                        <div className="population-div">
                            <h3><IoPersonStalker /> {randomCity.pop.toLocaleString('en')}</h3>
                        </div>
                        <div className="time-div">
                            <LocalTime /> 
                        </div> 
                    </div>
                </div>
            )}
         return null
    }
}

function mapStateToProps(state) {
    return {
      randomCity: state.randomCity
    }
  }

export default connect(mapStateToProps)(CityInfo)


