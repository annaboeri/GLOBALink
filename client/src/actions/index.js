import httpClient from "../httpClient"

export function generateRandomCity(cities) {
    // generateRandomCity is an ActionCreator, it needs to return an action,
    // an object with a type property
    let randomCity = cities[Math.floor(Math.random() * cities.length)]
    return {
      type: 'GENERATE_RANDOM_CITY',
      payload: randomCity
    }
  }

export function fetchCountryInfo(randomCity){
    const request = httpClient.getCountryInfo(randomCity.iso3.toLowerCase())
    return {
        type: 'FETCH_COUNTRY_INFO',
        payload: request

    }
}

export function fetchTwitterTrends(randomCity){
    const request = httpClient.getTwitterTrends(randomCity.lat, randomCity.lng)
    return {
        type: 'FETCH_TWITTER_TRENDS',
        payload: request
    }
} 

export function fetchWeather(randomCity){
    const request = httpClient.getWeather(randomCity.city)
    return {
        type: 'FETCH_WEATHER',
        payload: request
    }
} 

export function fetchPlacesInfo(randomCity){
    const request = httpClient.getGooglePlacesData(randomCity.lat, randomCity.lng)
    return {
        type: 'FETCH_PLACES_INFO',
        payload: request
    }
} 
