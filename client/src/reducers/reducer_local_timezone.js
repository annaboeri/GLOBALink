
export default function(state = null, action) {
    switch (action.type) {
        case 'FETCH_LOCAL_TIMEZONE':
          return action.payload.data
        default:
          return state
      }
}