
export function generateRandomCity(cities) {
    // generateRandomCity is an ActionCreator, it needs to return an action,
    // an object with a type property
    console.log('action', cities)
    let randomCity = cities[Math.floor(Math.random() * cities.length)]
    console.log(randomCity)
    return {
      type: "GENERATE_RANDOM_CITY",
      payload: randomCity
    }
  }