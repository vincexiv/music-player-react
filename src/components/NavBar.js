import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){

    return (
        <nav>
            <div className="container">
                <NavLink to="/home" id="vintage-beats-logo" className="navlink" >VintageBeats</NavLink>
                <ul className="display-flex list-style-none">
                    <li>Our Merch</li>
                    <li>About Us</li>
                    <NavLink exact to="/login" id="log-in" className="not-logged-in">
                        Login
                    </NavLink>
                </ul>
            </div>
        </nav>         
    )
}

export default NavBar