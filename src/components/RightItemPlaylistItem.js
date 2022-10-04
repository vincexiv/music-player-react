import React from 'react'

function PlaylistItem({songData, handleMoveToCurrentlyPlaying}){
    return (
        <li className="song" id={songData.id} onClick={()=>{handleMoveToCurrentlyPlaying(songData)}}>
            <p className="song-name">{songData.songName}</p>
            
            <div className="song-details">
                <p className="artist-name">{songData.songArtist}</p>
            </div>
        </li>        
    )
}

export default PlaylistItem