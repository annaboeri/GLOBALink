import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = (props) => {
	return (
		<div className='Home'>
			<div className="text">
				<h1>Explore the world one random city at a time.</h1>
				<h2>Learn about cities around the world while chatting in real time with other users from around the globe!</h2>
				<h3>Click <Link to="/signup">here</Link> to sign up and start exploring.</h3>
			</div>
		</div>
	)
}


export default Home