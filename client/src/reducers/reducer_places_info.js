
export default function(state = [], action) {
    switch (action.type) {
        case 'FETCH_PLACES_INFO':
        console.log(action.payload)
          return [ ...state, action.payload.data ] 
        default:
          return state
      }
}
