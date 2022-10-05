import React, {useContext} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import {NavLink} from 'react-router-dom'

function NavBar(){
    const {userDetails, setUserDetails} = useContext(songDetails)

    function handleLogout(event){
        setUserDetails({isLoggedIn: false, data: {}})
    }

    return (
        <nav>
            <div className="container">
                <NavLink to="/home" id="vintage-beats-logo" className="navlink" >VintageBeats</NavLink>
                <ul className="display-flex list-style-none">
                    <li>Our Merch</li>
                    <li>About Us</li>
                    <NavLink exact to="/login" id="log-in" className="not-logged-in navlink" onClick={handleLogout}>
                        {userDetails.isLoggedIn ? "Log Out" : "Log In"}
                    </NavLink>
                </ul>
            </div>
        </nav>         
    )
}

export default NavBar