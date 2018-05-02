
export default function(state = null, action) {
    switch (action.type) {
        case 'FETCH_PLACES_INFO':
        console.log('places reducer', action.payload.data)
          return [ action.payload.data ]  
        default:
          return state
      }
}
