import React from 'react'

function Footer(){
    return (
        <footer>
            <div className="container">

                <div id="about-us">
                    <h2>About Us</h2>
                    <p>We are a music company dedicated toward making the most awesome sounds from the past generation that we believe the current generation is sleeping on. Join us and become one of the very few people with awesome music taste</p>
                </div> 

                <div id="contact">
                    <h2>Contact</h2>
                    <ul>
                        <li>PO Box. 37875873 Nairobi, Kenya</li>
                        <li>Phone: 07298524182</li>
                        <li>Email: hello@vintagebeats.com</li>
                    </ul>
                </div>     

                <div id="links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">How it works</a></li>
                        <li><a href="#">Join Our Club</a></li>
                    </ul>
                </div>

                <div id="more-stuff">
                    <h2>More</h2>
                    <li><a href="#">Our Merchandise</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </div>
            </div>
        </footer>        
    )
}

export default Footer