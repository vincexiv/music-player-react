import React, {createContext, useState} from 'react'
import { lastPlayedSong } from './variables'


const currentlyPlayingSong = createContext()

function CurrentlyPlayingContextProvider({children}){
    const [currentlyPlaying, setCurrentlyPlaying] = useState(lastPlayedSong)
    return (
        <currentlyPlayingSong.Provider value={{currentlyPlaying, setCurrentlyPlaying}}>
            {children}
        </currentlyPlayingSong.Provider>
    )
}

export {currentlyPlayingSong, CurrentlyPlayingContextProvider}