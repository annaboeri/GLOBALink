// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  console.log('reducor called', action)
    switch (action.type) {
      case "GENERATE_RANDOM_CITY":
        console.log(action.payload)
        return Object.assign({}, state, {
          randomCity: action.payload
        })
      default:
        return state
    }
  } 