import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import 'milligram'
import './styles.css'
import App from './components/App'

ReactDOM.render(
	<Router><App id="App" /></Router>,
	document.getElementById('root')
)