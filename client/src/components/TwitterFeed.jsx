import React from 'react'
import httpClient from '../httpClient'
import './TwitterFeed.css'


class TwitterFeed extends React.Component {

    state = {
        twitterTrends: []
    }

    componentDidMount(){
        httpClient.getWOEID(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                twitterTrends: serverResponse.data
            })
        })
    }

	render(){ 
        return (
		<div className='TwitterFeed Container'>
            <ul>
                {this.state.twitterTrends.map((t, i) => {
                    return <li key={i}>{t.name}</li>
                }) }
            </ul>
		</div>
    )
    }
}

export default TwitterFeed