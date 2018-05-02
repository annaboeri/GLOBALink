import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchLocalTimezone } from '../actions/index'
import httpClient from '../httpClient'
import Clock from 'react-live-clock'
import {IoIosTime} from 'react-icons/lib/io'


class LocalTime extends React.Component{

    componentDidMount(){
        console.log('local time props:', this.props)
        if(!this.props.localTime){
        this.props.fetchLocalTimezone(this.props.randomCity)
        }
    } 
    

    render(){
        if (this.props.localTimezone){
        const localTimezone = this.props.localTimezone
        console.log(localTimezone)   
            return(
                <div className="LocalTime">
                    <h3><IoIosTime /><Clock format={' h:mm:ss a'} ticking={true} timezone={localTimezone} />
                    </h3>                    
                </div>
            )
        }
        else return null
    }
}


function mapStateToProps(state) {
    return {
      randomCity: state.randomCity,
      localTimezone: state.localTimezone
    }
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchLocalTimezone }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalTime)
