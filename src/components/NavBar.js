import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
    return (
        <nav>
            <div className="container">
                <NavLink to="/" id="vintage-beats-logo">VintageBeats</NavLink>
                <ul className="display-flex list-style-none">
                    <li>Our Merch</li>
                    <li>About Us</li>
                    <li id="log-in" className="not-logged-in">Log In</li>
                </ul>
            </div>
        </nav>         
    )
}

export default NavBar