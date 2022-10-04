import React from 'react'

function CenterItemCurrentlyPlaying(){
    return (
        <div id="currently-playing">
            <div className="song-name">
                <h1>I Remember You</h1> 
                <i className="fa fa-regular fa-heart" id="favorite"></i>
            </div>

            <div id="playing-song-details">
                <p className="artist-name">- Eilen Jewell</p>
            </div>
        </div>        
    )
}

export default CenterItemCurrentlyPlaying