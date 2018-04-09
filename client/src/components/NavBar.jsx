import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
	return (
		<div className='NavBar Container'>
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                {props.currentUser
                    ? (
                        <span>
                            <Link to="/logout">Log Out</Link>
                            <Link to="/chat">Chat</Link>
                            <Link to="/profile">Profile</Link>
                        </span>
                    )
                    : (
                        <span>
                            <Link to="/login">Log In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </span>
                    )
                }
		</div>
	)
}

export default NavBar