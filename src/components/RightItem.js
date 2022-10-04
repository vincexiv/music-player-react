import React, {useRef} from 'react'
import PlaylistItem from './RightItemPlaylistItem'

function RightItem({activePlaylist}){
    console.log("activeplaylist: ",activePlaylist)
    
    const songItems = activePlaylist.data.map(songData => <PlaylistItem key={songData.id} songData={songData} />)

    function showStatus(playlist){
        return (activePlaylist.name === playlist ? "active" : "inactive")
    }

    return (
        <div className="right-item">
            <h1>Up Next</h1>

            <ul id="up-next"></ul>

            <div id="playlist-buttons">
                <button className={`btn ${showStatus("favorites")}`} id="favorites-playlist">Favorites</button>
                <button className={`btn ${showStatus("blues-rock")}`} id="blues-rock-playlist">Blues/Rock</button>
                <button className={`btn ${showStatus("blues-jazz")}`} id="blues-jazz-playlist">Blues/Jazz</button>
                <button className={`btn display-none ${showStatus("favorites")}`} id="funk-disco-playlist">Funk/Disco</button>
                <button className="btn">More...</button>
            </div>
            
            <div id="play-list">
                <ul id="play-list-items">
                    {songItems}
                </ul>
            </div>

            <div className="bottom">
                <h1>Recommended For You</h1>
                <ul id="recommended-for-you">                               
                </ul>
            </div>
        </div>        
    )
}

export default RightItem;