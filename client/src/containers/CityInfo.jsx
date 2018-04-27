import React from 'react'
import { connect } from 'react-redux'
import LocalTime from './LocalTime'
import '../styles/CityInfo.css'
import {IoIosLocation, IoMap, IoPersonStalker} from 'react-icons/lib/io'


class CityInfo extends React.Component {

    // componentDidMount() {
    //     this.setState({
    //         randomCity: this.props.randomCity,
    //         population: this.props.randomCity.pop.toLocaleString('en')
    //     })
    // }

    render(){
        console.log(this.props.randomCity)
        if(this.props.randomCity){
            const { randomCity } = this.props.randomCity
            return (
                <div className="cityInfo">
                    <div className="row">
                        <div className="column">
                            <h2><IoIosLocation /><span>{randomCity.city}</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column column-40">
                            <h3><IoMap /> {randomCity.province}, {randomCity.country}</h3>
                        </div>
                        <div className="column column-30">
                            <h3><IoPersonStalker /> {randomCity.pop}</h3>
                        </div>
                        {/* <div className="column column-30">
                            <LocalTime randomCity={randomCity} /> 
                        </div> */}
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
