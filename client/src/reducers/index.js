import { combineReducers } from 'redux'
import CitiesReducer from './reducer_cities'
import RandomCity from "./reducer_random_city"


const rootReducer = combineReducers({
    cities: CitiesReducer,
    randomCity: RandomCity
  });
  
  export default rootReducer;