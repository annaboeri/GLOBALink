import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import httpClient from '../httpClient'
import '../styles/App.css'
import NavBar from './NavBar'
import TitleBar from './TitleBar'
import LogIn from '../views/LogIn'
import LogOut from '../views/LogOut'
import SignUp from '../views/SignUp'
import Home from '../views/Home'
import Explore from '../views/Explore'
import Chat from '../views/Chat'
import Profile from '../views/Profile'


class App extends React.Component {
	state = { 
		currentUser: httpClient.getCurrentUser(),
	}

	onLoginSuccess(user) {
		this.setState({ currentUser: httpClient.getCurrentUser() })
	}
	onUpdateSuccess(updatedUser) {
		this.setState({ currentUser: updatedUser})
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
				<TitleBar />

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

					<Route path="/profile" render={(props) => {
						return currentUser
						? <Profile user={currentUser} onUpdateSuccess={this.onUpdateSuccess.bind(this)}/>
						: <Redirect to="/login" />
					}} />
					
					<Route path="/chat" render={(props) => {
						return currentUser
						? <Chat {...props} user={currentUser} />
						: <Redirect to="/login" />
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