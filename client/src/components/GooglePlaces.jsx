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

	render(){ 
        console.log(this.state.googlePlaces)
        return (
		<div className="GooglePlaces">
            <div>Top Places:
                {this.state.googlePlaces.map((t, i) => {
                    return (
                        <div>
                            <div key={t.name}>{t.name}</div>
                            <img className="placeIcon" key={t.geometry.icon} src={t.icon} />
                        </div>
                    )
                }) }
            </div>
		</div>
    )
    }
}

export default GooglePlaces
