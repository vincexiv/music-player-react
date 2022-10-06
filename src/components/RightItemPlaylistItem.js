import React, { useContext } from "react";
import { songDetails } from "../SongDetailsContextProvider";

function PlaylistItem({songData}){
    const {currentlyPlaying, setCurrentlyPlaying} = useContext(songDetails)

    function handleCurrentlyPlayingClick(event){
        if(currentlyPlaying.id !== songData.id){
            setCurrentlyPlaying(songData)
        }
    }

    return (
        <li className="song" id={songData.id} onClick={(event)=>{handleCurrentlyPlayingClick(event)}}>
            <p className="song-name">{songData.songName}</p>
            
            <div className="song-details">
                <p className="artist-name">{songData.songArtist}</p>
            </div>
        </li>                
    )
}

export default PlaylistItem