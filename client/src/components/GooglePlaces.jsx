import React from 'react'
import httpClient from '../httpClient'
import './GooglePlaces.css'


class GooglePlaces extends React.Component {

    state = {
        googlePlaces: []
    }

    componentWillMount(){
        this.setState({
            googlePlaces: []
        })
    }

    componentDidMount(){
        httpClient.getGooglePlacesData(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                googlePlaces: serverResponse.data
            })
        })
    } 

	render(){ 
        if(this.state.googlePlaces !== []){
        return (
		<div className="GooglePlaces">
            <h3>Top Places:</h3>
            {this.state.googlePlaces.map((t, i) => {
                return (
                    <div>
                        <img className="placeIcon" key={t.geometry.icon} src={t.icon} alt="place icon" />
                        <div className="placeName" key={t.name}>{t.name}</div>
                    </div>
                )
            }) }
		</div>
        )}
        return (
            <div className="GooglePlaces">
                <h3>No Place Data Available</h3>
            </div>
        )
    }
}

export default GooglePlaces
