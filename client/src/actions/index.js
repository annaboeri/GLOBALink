
export function generateRandomCity(cities) {
    // generateRandomCity is an ActionCreator, it needs to return an action,
    // an object with a type property
    let randomCity = cities[Math.floor(Math.random() * cities.length)]
    return {
      type: "GENERATE_RANDOM_CITY",
      payload: randomCity
    }
  }