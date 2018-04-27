import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'milligram'
import './styles.css'
import App from './containers/App'
import reducers from './reducers'

const store = createStore(reducers)
console.log(store.getState())


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App id="App" />
		</Router>
	</Provider>,
	document.getElementById('root')
)