import React, {createContext, useState} from 'react'
import { lastPlayedSong, apiHost } from './variables'
import { useQuery } from './customHooks'


const songDetails = createContext()

function SongDetailsContextProvider({children}){
    const [currentlyPlaying, setCurrentlyPlaying] = useState(lastPlayedSong)
    const [activePlaylist, setActivePlaylist] = useQuery(`${apiHost}/musicInfo?_embed=comments&favorited=true`, "favorites")
    const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem("userDetails")) || {isLoggedIn: false, userDetails: {}})

    return (
        <songDetails.Provider value={{currentlyPlaying, setCurrentlyPlaying, activePlaylist, setActivePlaylist, userDetails, setUserDetails}}>
            {children}
        </songDetails.Provider>
    )
}

export {songDetails, SongDetailsContextProvider}