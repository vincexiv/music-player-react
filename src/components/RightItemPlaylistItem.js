import React, { useContext } from "react";
import { songDetails } from "../SongDetailsContextProvider";

function PlaylistItem({songData}){
    const {setCurrentlyPlaying} = useContext(songDetails)
    
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