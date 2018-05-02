
export default function(state = null, action) {
    switch (action.type) {
        case 'FETCH_LOCAL_TIMEZONE':
        console.log('reducer action payload', action.payload)
          return action.payload.data
        default:
          return state
      }
}