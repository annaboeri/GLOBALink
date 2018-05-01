import httpClient from "../httpClient"

export function generateRandomCity(cities) {
    // generateRandomCity is an ActionCreator, it needs to return an action,
    // an object with a type property
    let randomCity = cities[Math.floor(Math.random() * cities.length)]
    return {
      type: "GENERATE_RANDOM_CITY",
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