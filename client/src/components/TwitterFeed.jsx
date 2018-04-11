import React from 'react'
import httpClient from '../httpClient'
import './TwitterFeed.css'


class TwitterFeed extends React.Component {

    state = {
        twitterTrends: []
    }

    componentDidMount(){
        httpClient.getTwitterTrends(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                twitterTrends: serverResponse.data
            })
        })
    } 

	render(){ 
        return (
		<div className="TwitterFeed tickerWrap">
            <div className="ticker">Top Twitter Trends:
                {this.state.twitterTrends.map((t, i) => {
                    return <div className="tickerItem" key={i}>
                        <a target="_blank" href={t.url}>{t.name}</a>
                        </div>
                }) }
            </div>
		</div>
    )
    }
}

export default TwitterFeed