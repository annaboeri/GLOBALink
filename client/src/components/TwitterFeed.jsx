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
		<div className="TwitterFeed ticker-wrap">
            <div className="ticker">
                {/* {this.state.twitterTrends.map((t, i) => {
                    return <div className="ticker-item" key={i}>{t.name}</div>
                }) } */}
                <div className="ticker-item">Tweet</div>
            </div>
		</div>
    )
    }
}

export default TwitterFeed