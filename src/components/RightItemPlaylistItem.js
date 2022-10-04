import React from 'react'

function PlaylistItem({songData}){
    return (
        <li className="song" id={songData.id}>
            <p className="song-name">{songData.songName}</p>
                <div className="song-details">
            <p className="artist-name">{songData.songArtist}</p>
        </div>
        </li>        
    )
}

export default PlaylistItem