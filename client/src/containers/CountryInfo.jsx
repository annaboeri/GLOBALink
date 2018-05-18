import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCountryInfo } from '../actions/index'
import '../styles/CountryInfo.css'


class CountryInfo extends React.Component {


    componentDidMount(){
        this.props.fetchCountryInfo(this.props.randomCity)    
    }
    
    componentDidUpdate(prevProps) {
        if(prevProps.randomCity !== this.props.randomCity){
            this.props.fetchCountryInfo(this.props.randomCity)
        }
    }

      
	render(){
        if(this.props.countryInfo){
        const { countryInfo } = this.props
        return (
            <div className="CountryInfo">
                <div className="row">
                    <div className="column">
                        <h3>Country Facts:</h3>
                        <div className="Info"><span>Country: </span>{countryInfo.name}</div>
                        <div className="Info"><span>Capital: </span>{countryInfo.capital}</div>
                        <div className="Info"><span>Currency: </span>{countryInfo.currencies[0].name}</div>
                        <div className="Info"><span>Language: </span>{countryInfo.languages[0].name}</div> 
                    </div>
                    <div className="column">
                        <img className="flagImg" src={countryInfo.flag} alt="Country Flag" /> 
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
