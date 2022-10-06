import React, {useEffect, useRef, useContext} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import PlaylistItem from './RightItemPlaylistItem'

function RightItem({activePlaylist, handlePlaylistChange}){
    const {currentlyPlaying} = useContext(songDetails)
    const upNext = useRef([])

    useEffect(()=>{

        // Update songs in the "up next"
        if(activePlaylist.data.length){

            const songIds = activePlaylist.data.map(song => song.id)
            const indexOfCurrentlyPlaying = songIds.indexOf(currentlyPlaying.id)
    
            const songArray = []
            for(let i = indexOfCurrentlyPlaying + 1; i <= indexOfCurrentlyPlaying + 3; i++){
                songArray.push(activePlaylist.data[i] || activePlaylist.data[i - songIds.length])
            }
    
            upNext.current = songArray.map(data => <li key={data.id} style={{whiteSpace: "nowrap", textOverflow: "ellipsis",  overflowWrap: "break-word"}}>
                    {data.songName}
                </li>)
        }
        
        
    }, [currentlyPlaying])


    const songItems = activePlaylist.data.map(songData => <PlaylistItem key={songData.id} songData={songData} />)


    function showStatus(playlist){
        return (activePlaylist.name === playlist ? "active" : "inactive")
    }


    return (
        <div className="right-item">
            <h1>Up Next</h1>

            <ul id="up-next">{upNext.current}</ul>

            <div id="playlist-buttons">
                <button className={`btn ${showStatus("favorites")}`} id="favorites-playlist" onClick={()=>handlePlaylistChange("favorites")}>Favorites</button>
                <button className={`btn ${showStatus("bluesRock")}`} id="blues-rock-playlist" onClick={()=>handlePlaylistChange("bluesRock")}>Blues/Rock</button>
                <button className={`btn ${showStatus("bluesJazz")}`} id="blues-jazz-playlist" onClick={()=>handlePlaylistChange("bluesJazz")}>Blues/Jazz</button>
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
                <ul id="recommended-for-you"></ul>
            </div>
        </div>        
    )
}

export default RightItem;