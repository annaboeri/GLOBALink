import React from 'react'
import LocalTime from './LocalTime'
import './CityInfo.css'
import {IoIosLocation, IoMap, IoPersonStalker} from 'react-icons/lib/io'


class CityInfo extends React.Component {
    state = {
        randomCity: "",
        population: null
      }

      componentDidMount() {
          this.setState({
              randomCity: this.props.randomCity,
              population: this.props.randomCity.pop.toLocaleString('en')
          })
      }

    render(){
        const { randomCity, population } = this.state
        return (
            <div className="cityInfo">
            <div className="row">
                <div className="column">
                    <h2><IoIosLocation />{randomCity.city} </h2>
                </div>
            </div>
            <div className="row">
                <div className="column column-50">
                    <h3><IoMap /> {randomCity.province}, {randomCity.country}</h3>
                </div>
                <div className="column column-25">
                    <h3><IoPersonStalker /> {population}</h3>
                </div>
                <div className="column column-25">
                    <LocalTime randomCity={randomCity} /> 
                </div>
            </div>
   
            </div>
        )
    }

}

export default CityInfo