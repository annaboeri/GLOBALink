import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTwitterTrends } from '../actions/index'
import httpClient from '../httpClient'
import '../styles/TwitterFeed.css'


class TwitterFeed extends React.Component {


    componentDidUpdate(){
        if(!this.props.twitterTrends){
        this.props.fetchTwitterTrends(this.props.randomCity)
        }
    } 

	render(){ 
        if(this.props.twitterTrends){
        const { twitterTrends } = this.props
        console.log(twitterTrends)
        return (
		<div className="TwitterFeed tickerWrap">
            <div className="ticker">Top Twitter Trends:
                {twitterTrends.map((t, i) => {
                    return <div className="tickerItem" key={i}>
                        <a target="_blank" href={t.url}>{t.name}</a>
                        </div>
                }) }
            </div>
		</div>
        )
      } 
    else return null
    }
}

function mapStateToProps(state) {
    return {
      randomCity: state.randomCity,
      twitterTrends: state.twitterTrends
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTwitterTrends }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed)