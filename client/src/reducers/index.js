import { combineReducers } from 'redux'
import CitiesReducer from './reducer_cities'
import RandomCityReducer from './reducer_random_city'
import CountryInfoReducer from './reducer_country_info'
import TwitterTrendsReducer from './reducer_twitter_trends'


const rootReducer = combineReducers({
    cities: CitiesReducer,
    randomCity: RandomCityReducer,
    countryInfo: CountryInfoReducer,
    twitterTrends: TwitterTrendsReducer
  });
  
  export default rootReducer;