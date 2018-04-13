import React from 'react'
import httpClient from '../httpClient'
import './CountryInfo.css'


class CountryInfo extends React.Component {

    state = {
        country: {
            name: '',
            capital: '',
            currency: '',
            language: '',
            flagImg: ''
        }    
        
    }

    componentDidMount(){
        console.log(this.props.randomCity.iso3.toLowerCase())
        httpClient.getCountryInfo(this.props.randomCity.iso3.toLowerCase()).then((serverResponse) => {
            this.setState({
                country: {
                    name: serverResponse.data.name,
                    capital: serverResponse.data.capital,
                    currency: serverResponse.data.currencies[0].name,
                    language: serverResponse.data.languages[0].name,
                    flagImg: serverResponse.data.flag
                }
            })
        })
    }
    
    componentWillUnmount(){
        this.setState({
            country: {
                name: '',
                capital: '',
                currency: '',
                language: '',
                flagImg: ''
            }        
        })
    }

	render(){
        console.log(this.state)
        return (
            <div className="CountryInfo">
                <h3>Country Info:</h3>
                    <div>Country: {this.state.country.name}</div>
                    <div>Capital: {this.state.country.capital}</div>
                    <div>Currency: {this.state.country.currency}</div>
                    <div>Language: {this.state.country.language}</div>
                    <img className="flagImg" src={this.state.country.flagImg} />
            </div>
            )
    }
}

export default CountryInfo
