import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = (props) => {
	return (
		<div className='NavBar Container'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                {props.currentUser
                    ? (
                        <span>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/logout">Log Out</Link></li>
                        </span>
                    )
                    : (
                        <span>
                            <li><Link to="/login">Log In</Link></li>
                            <li><Link to="/signup">Sign Up</Link></li>
                        </span>
                    )
                }
            </ul>
		</div>
	)
}

export default NavBar