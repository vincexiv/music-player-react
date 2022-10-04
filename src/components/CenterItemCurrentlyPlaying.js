import React from 'react'

function CenterItemCurrentlyPlaying({currentlyPlaying}){
    return (
        <div id="currently-playing">
            <div className="song-name">
                <h1>{currentlyPlaying.songName}</h1> 
                <i className={`fa fa-heart ${currentlyPlaying.favorited? 'fa-solid' : 'fa-regular'}`} id="favorite"></i>
            </div>

            <div id="playing-song-details">
                <p className="artist-name">{`- ${currentlyPlaying.songArtist}`}</p>
            </div>
        </div>        
    )
}

export default CenterItemCurrentlyPlaying