import React from 'react'
import httpClient from '../httpClient'
import './TwitterFeed.css'


class TwitterFeed extends React.Component {

    state = {
        randomCityWOEID: null
    }


    componentWillMount(){
        httpClient.getWOEID(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                randomCityWOEID: serverResponse.data
            })
        })
    }

	render(){ 
        console.log(this.state)
        return (
		<div className='TwitterFeed Container'>
            <ul>
                <li>Tweet</li>
                <li>Another Tweet</li>
                <li>Third Tweet</li>
            </ul>
		</div>
    )
    }
}

export default TwitterFeed