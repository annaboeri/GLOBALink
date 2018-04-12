import React from 'react'
import { Redirect } from 'react-router-dom'
import {IoEarth} from 'react-icons/lib/io'
import './TitleBar.css'

class TitleBar extends React.Component {

	render() {
		return (
			<div className='TitleBar'>
				<h1>
					GLOBALink
				</h1>
			
			</div>
		)
	}
}

export default TitleBar