import React from 'react'
import httpClient from '../httpClient'
import '../styles/CountryInfo.css'


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
        return (
            <div className="CountryInfo">
                <div className="row">
                    <div className="column">
                        <h3>Country Facts:</h3>
                        <div className="Info"><span>Country: </span>{this.state.country.name}</div>
                        <div className="Info"><span>Capital: </span>{this.state.country.capital}</div>
                        <div className="Info"><span>Currency: </span>{this.state.country.currency}</div>
                        <div className="Info"><span>Language: </span>{this.state.country.language}</div>
                    </div>
                    <div className="column">
                        <img className="flagImg" src={this.state.country.flagImg} alt="Country Flag" />
                    </div>
                </div>
            </div>
            )
    }
}

export default CountryInfo
