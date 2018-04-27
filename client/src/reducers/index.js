import { combineReducers } from 'redux'
import CitiesReducer from './reducer_cities'
import RandomCityReducer from "./reducer_random_city"


const rootReducer = combineReducers({
    cities: CitiesReducer,
    randomCity: RandomCityReducer
  });
  
  export default rootReducer;