import React from 'react'
import './Home.css'
import image from '../public/cartography.png'

const Home = (props) => {
	return (
		<div className='Home'>
			<h1>GLOBALink</h1>
			<h2>Explore the world from your computer!</h2>
			<img src={image}/>
		</div>
	)
}


export default Home