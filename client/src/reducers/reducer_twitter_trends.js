
export default function(state = null, action) {
    // action payload is a promise
    switch (action.type) {
        case 'FETCH_TWITTER_TRENDS':
        console.log('twitter reducer action payload:', action.payload)
          return action.payload.data
        default:
          return state
      }
}
