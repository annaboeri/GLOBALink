
export default function(state = [], action) {
    // action payload is a promise
    switch (action.type) {
        case 'FETCH_TWITTER_TRENDS':
        console.log(action.payload)
          return [ ...state, action.payload.data ] 
        default:
          return state
      }
}
