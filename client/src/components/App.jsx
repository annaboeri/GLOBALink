import React from 'react'
import { Switch, Route } from 'react-router-dom'
import httpClient from '../httpClient'
import NavBar from './NavBar'
import LogIn from '../views/LogIn'
import LogOut from '../views/LogOut'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import Explore from '../views/Explore'

class App extends React.Component {
	state = { 
		currentUser: httpClient.getCurrentUser()
	}

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}
	onBarSubmitSuccess(bar) {
		this.setState({})

	}

	logOut() {
		httpClient.logOut()
		this.setState({ currentUser: null })
	}
	
	render() {
		const { currentUser } = this.state
		return (
			<div className='App container'>

				<NavBar currentUser={currentUser} />

				<Switch>

					<Route path="/login" render={(props) => {
						return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
					}} />

					<Route path="/logout" render={(props) => {
						return <LogOut onLogOut={this.logOut.bind(this)} />
					}} />

					{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
					<Route path="/signup" render={(props) => {
						return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
					}} />
					
					<Route path="/explore" render={(props) => {
						return <Explore />
					}} />

					<Route path="/" render={(props) => {
						return <Home />
					}} />

				</Switch>
			</div>
		)
	}
}

export default App