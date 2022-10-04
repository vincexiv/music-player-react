import React from 'react'
import { apiHost } from '../variables'
import { updateSongDetails } from '../utilityFunctions'


function CenterItemCurrentlyPlaying({currentlyPlaying, setCurrentlyPlaying}){

    function handleFavoriteClick(){
        updateSongDetails(`
            ${apiHost}/musicInfo/${currentlyPlaying.id}`,
            {favorited: !currentlyPlaying.favorited},
            setCurrentlyPlaying
        )
    }

    return (
        <div id="currently-playing">
            <div className="song-name">
                <h1>{currentlyPlaying.songName}</h1> 
                <i className={`fa fa-heart ${currentlyPlaying.favorited? 'fa-solid' : 'fa-regular'}`} id="favorite" onClick={handleFavoriteClick}></i>
            </div>

            <div id="playing-song-details">
                <p className="artist-name">{`- ${currentlyPlaying.songArtist}`}</p>
            </div>
        </div>        
    )
}

export default CenterItemCurrentlyPlaying