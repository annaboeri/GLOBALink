import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import 'milligram'
import './styles.css'
import App from './containers/App'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)
const store = createStoreWithMiddleware(reducers)
console.log(store.getState(ReduxPromise))


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App id="App" />
		</Router>
	</Provider>,
	document.getElementById('root')
)