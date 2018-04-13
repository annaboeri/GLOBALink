import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = (props) => {
	return (
		<div className='Home'>
			<h1>Explore the world from your computer!</h1>
			<h2>Learn about cities around the world while chatting in real time with other users around the globe!</h2>
			<h3>Click <Link to="/signup">here</Link> to sign up and start exploring.</h3>
		</div>
	)
}


export default Home