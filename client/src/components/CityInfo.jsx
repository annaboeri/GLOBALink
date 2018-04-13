import React from 'react'
import LocalTime from './LocalTime'
import './CityInfo.css'
import {IoAndroidGlobe, IoIosLocation, IoAndroidCompass, IoMap, IoPersonStalker, IoIosAlarm, IoIosTime} from 'react-icons/lib/io'




class CityInfo extends React.Component {
    state = {
        randomCity: "",
        population: null
      }

      componentDidMount() {
          console.log(this.props)
          this.setState({
              randomCity: this.props.randomCity,
              population: this.props.randomCity.pop.toLocaleString('en')
          })
      }

    render(){
        const { randomCity, population } = this.state
        return (
            <div className="cityInfo">
                <h2><IoIosLocation className="icon" />{randomCity.city} </h2>
                <h3><IoMap className="icon" /> {randomCity.province}, {randomCity.country}</h3>
                <h3><IoPersonStalker className="icon" /> {population}</h3>
                <LocalTime randomCity={randomCity} /> 
            </div>
        )
    }

}

export default CityInfo