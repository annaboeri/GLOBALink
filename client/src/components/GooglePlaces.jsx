import React from 'react'
import httpClient from '../httpClient'
import './GooglePlaces.css'


class GooglePlaces extends React.Component {

    state = {
        googlePlaces: []
    }

    componentDidMount(){
        httpClient.getGooglePlacesData(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                googlePlaces: serverResponse.data
            })
        })
    }
    
    componentWillUnmount(){
        this.setState({
            googlePlaces: []
        })
    }

	render(){
        if(this.state.googlePlaces.length > 0){
        return (
            <div className="GooglePlaces">
                <h3>Popular Places:</h3>
                {this.state.googlePlaces.map((t, i) => {
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
}

export default GooglePlaces
