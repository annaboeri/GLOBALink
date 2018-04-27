// State argument is not application state, only the state
// this reducer is responsible for


export default function(state = null, action) {
  console.log('reducor called', action.payload)
    switch (action.type) {
      case "GENERATE_RANDOM_CITY":
        return Object.assign({}, state, {
          randomCity: action.payload
        })
      default:
        return state
    }
  } 