import React, {useContext} from 'react'
import { songDetails } from '../SongDetailsContextProvider'

function PlaylistButtons({handlePlaylistChange}){
    const {activePlaylist} = useContext(songDetails)

    function showStatus(playlist){
        return (activePlaylist.name === playlist ? "active" : "inactive")
    }


    return (
        <div id="playlist-buttons">
            <button className={`btn ${showStatus("favorites")}`} id="favorites-playlist" onClick={()=>handlePlaylistChange("favorites")}>Favorites</button>
            <button className={`btn ${showStatus("bluesRock")}`} id="blues-rock-playlist" onClick={()=>handlePlaylistChange("bluesRock")}>Blues/Rock</button>
            <button className={`btn ${showStatus("bluesJazz")}`} id="blues-jazz-playlist" onClick={()=>handlePlaylistChange("bluesJazz")}>Blues/Jazz</button>
            <button className={`btn display-none ${showStatus("favorites")}`} id="funk-disco-playlist">Funk/Disco</button>
            <button className="btn">More...</button>
        </div>        
    )
}

export default PlaylistButtons