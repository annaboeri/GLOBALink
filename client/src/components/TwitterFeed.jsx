import React from 'react'
import './TwitterFeed.css'
import twitterClient from '../twitterClient'


class TwitterFeed extends React.Component {

	render(){ 
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