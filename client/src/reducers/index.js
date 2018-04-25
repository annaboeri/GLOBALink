import { combineReducers } from 'redux'
import RandomCity from "./reducer_random_city"


const rootReducer = combineReducers({
    randomCity: RandomCity
  });
  
  export default rootReducer;