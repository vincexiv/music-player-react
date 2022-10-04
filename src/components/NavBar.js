import React from 'react'

function NavBar(){
    return (
        <nav>
            <div className="container">
                <div id="vintage-beats-logo">VintageBeats</div>
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