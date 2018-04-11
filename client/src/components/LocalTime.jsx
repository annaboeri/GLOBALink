import React from 'react'
import httpClient from '../httpClient'
import Clock from 'react-live-clock'

class LocalTime extends React.Component{

    state = {
        localTimezone: ""
    }

    componentDidMount(){
        httpClient.getLocalTime(this.props.randomCity.lat, this.props.randomCity.lng).then((serverResponse) => {
            this.setState({
                localTimezone: serverResponse.data
            })
        })
    }

    render(){
        const { localTimezone } = this.state   
            return(
                <div className="LocalTime">
                    <h3>Current Time: 
                        <Clock format={' h:mm:ss a'} ticking={true} timezone={localTimezone} />
                    </h3>                    
                </div>
            )
    }
}

export default LocalTime
