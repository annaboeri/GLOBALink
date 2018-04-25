
export function generateRandomCity(city) {
    // generateRandomCity is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "NEW_CITY_GENERATED",
      payload: city
    };
  }