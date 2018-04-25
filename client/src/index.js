import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import 'milligram'
import './styles.css'
import App from './components/App'
import reducers from './reducers'

ReactDOM.render(
	<Provider store={createStore(reducers)}>
		<Router>
			<App id="App" />
		</Router>
	</Provider>,
	document.getElementById('root')
)