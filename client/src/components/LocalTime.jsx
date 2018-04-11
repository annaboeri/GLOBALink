import React from 'react'
import httpClient from '../httpClient'

class LocalTime extends React.Component{

    state = {
        localTime: ""
    }

    componentDidMount(){
        httpClient.getLocalTime(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
           console.log('server response:', serverResponse)
            // this.setState({
            //     localTime: 
            // })
        })
    }

    render(){
            return(
                <div className="LocalTime">
                    <h3>Current Time:</h3>
                </div>
            )
    }
}

export default LocalTime
