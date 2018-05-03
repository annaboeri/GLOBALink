
export default function(state = null, action) {
    switch (action.type) {
        case 'FETCH_PLACES_INFO':
          return [ action.payload.data ]  
        default:
          return state
      }
}
