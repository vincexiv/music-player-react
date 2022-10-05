import React, {useContext} from 'react'
import { currentlyPlayingSong } from '../CurrentlyPlayingContextProvider'


function PlaylistItem({songData}){

    const {setCurrentlyPlaying} = useContext(currentlyPlayingSong)

    return (
        <li className="song" id={songData.id} onClick={()=>{setCurrentlyPlaying(songData)}}>
            <p className="song-name">{songData.songName}</p>
            
            <div className="song-details">
                <p className="artist-name">{songData.songArtist}</p>
            </div>
        </li>        
    )
}

export default PlaylistItem