import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCountryInfo } from '../actions/index'
import httpClient from '../httpClient'
import '../styles/CountryInfo.css'


class CountryInfo extends React.Component {


    componentDidUpdate() {
        console.log(this.props.randomCity)
        this.props.fetchCountryInfo(this.props.randomCity)
    }

      
	render(){
        console.log(this.props)
        if(this.props.countryInfo){
        return (
            <div className="CountryInfo">
                <div className="row">
                    <div className="column">
                        <h3>Country Facts:</h3>
                        <div className="Info"><span>Country: </span>{this.state.country.name}</div>
                        <div className="Info"><span>Capital: </span>{this.state.country.capital}</div>
                        <div className="Info"><span>Currency: </span>{this.state.country.currency}</div>
                        <div className="Info"><span>Language: </span>{this.state.country.language}</div> 
                    </div>
                    <div className="column">
                        <img className="flagImg" src={this.state.country.flagImg} alt="Country Flag" /> 
                    </div>
                </div>
            </div>
            )
        }
    else return null
    }
}


function mapStateToProps(state) {
    return {
      randomCity: state.randomCity,
      countryInfo: state.countryInfo
    }
  }

// whenever the fetchCountryInfo action creator is called and returns an action
// bindActionCreators with dispatch makes sure that the actions flows down into the middleware and reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchCountryInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryInfo)
