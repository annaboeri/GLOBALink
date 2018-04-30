
export default function(state = null, action) {
    console.log('Action received', action)
    return state
    switch (action.type) {
        case 'FETCH_COUNTRY_INFO':
          return Object.assign({}, state, {
            countryInfo: action.payload
          })
        default:
          return state
      }
}