import React from 'react'
import './Home.css'
import image from '../public/cartography.png'

const Home = (props) => {
	return (
		<div className='Home'>
			<h2>Explore the world from your computer!</h2>
			<img src={image} alt="World Map"/>
		</div>
	)
}


export default Home