// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
    switch (action.type) {
      case 'GENERATE_RANDOM_CITY':
        return Object.assign({}, state, action.payload)
      default:
        return state
    }
  } 