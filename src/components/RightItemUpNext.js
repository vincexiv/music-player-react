import React, {useContext} from 'react'
import {songDetails} from '../SongDetailsContextProvider'


function UpNext(){
    const {currentlyPlaying, activePlaylist} = useContext(songDetails)

    const upNext = useRef([])

    useEffect(()=>{
        const songIds = activePlaylist.data.map(song => song.id)
        const indexOfCurrentlyPlaying = songIds.indexOf(currentlyPlaying.id)

        for(let i = indexOfCurrentlyPlaying + 1; i <= indexOfCurrentlyPlaying + 3; i++){
            upNext.current.push(activePlaylist.data[i] || activePlaylist.data[i - songIds.length])
        }
    }, [currentlyPlaying])
}