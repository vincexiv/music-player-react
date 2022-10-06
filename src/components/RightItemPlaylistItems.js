import React, {useContext} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import PlaylistItem from './RightItemPlaylistItem'

function PlaylistItems(){
    const {activePlaylist, setCurrentlyPlaying} = useContext(songDetails)

    const songItems = activePlaylist.data.map(songData => (<PlaylistItem key={songData.id} songData={songData}/>))

    return (
        <div id="play-list">
            <ul id="play-list-items">
                {songItems}
            </ul>
        </div>
    )
}

export default PlaylistItems