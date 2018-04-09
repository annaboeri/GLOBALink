import React from 'react'
import './TwitterFeed.css'
import twitterClient from '../twitterClient'


class TwitterFeed extends React.Component {
    componentWillMount(){
        
//   twitterClient.get('https://api.twitter.com/1.1/trends/closest.json?lat=37.781157&long=-122.400612831116', function(error, response) {
//     if(error) throw error;
//     console.log(response);  // Raw response object. 

//         })
    }

	render(){ 
        console.log(this.props.randomCity)
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