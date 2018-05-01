
export default function(state = null, action) {
    // action payload is a promise
    switch (action.type) {
        case 'FETCH_COUNTRY_INFO':
          return Object.assign({}, state, action.payload.data)
        default:
          return state
      }
}