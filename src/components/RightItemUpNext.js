import React, {useContext, useRef, useEffect} from 'react'
import {songDetails} from '../SongDetailsContextProvider'


function UpNext(){
    const {currentlyPlaying, activePlaylist} = useContext(songDetails)
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
    
            upNext.current = songArray.map(data => <li key={data.id} style={{fontSize: "0.7rem", whiteSpace: "nowrap", textOverflow: "ellipsis",  overflowWrap: "break-word"}}>
                    {data.songName}
                </li>)
        }
    }, [currentlyPlaying])

    return (
        <ul id="up-next">{upNext.current}</ul>
    )
}

export default UpNext