import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchPlacesInfo } from '../actions/index'
import httpClient from '../httpClient'
import '../styles/GooglePlaces.css'


class GooglePlaces extends React.Component {

 
    componentDidUpdate(prevProps){
        if(prevProps.randomCity !== this.props.randomCity){
            this.props.fetchPlacesInfo(this.props.randomCity)
        }
    }

	render(){
        if(this.props.placesInfo){
        const placesInfo = this.props.placesInfo[0]
            if(placesInfo.length > 0){
                return (
                    <div className="GooglePlaces">
                        <h3>Popular Places:</h3>
                        {placesInfo.map((t, i) => {
                            return (
                                <div key={i}>
                                    <img className="placeIcon" src={t.icon} alt="place icon" />
                                    <div className="placeName">{t.name}</div>
                                </div>
                            )
                        }) }
                    </div>
                    )
                } else {
                    return (
                        <div className="GooglePlaces">
                            <h3>No Place Data Available</h3>
                        </div>
                    )
                }
        }
        else return null
    }
}

function mapStateToProps(state) {
    return {
      randomCity: state.randomCity,
      placesInfo: state.placesInfo
    }
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPlacesInfo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GooglePlaces)


