import React, {useEffect, useRef, useContext} from 'react'
import { songDetails } from '../SongDetailsContextProvider'
import PlaylistItems from './RightItemPlaylistItems'
import UpNext from './RightItemUpNext'
import PlaylistButtons from './RightItemPlaylistButtons'
import RecommendedForYou from './RightItemRecommendedForYou'

function RightItem({handlePlaylistChange}){
    return (
        <div className="right-item">
            <h1>Up Next</h1>
            <UpNext />
            <PlaylistButtons handlePlaylistChange={handlePlaylistChange} />
            <PlaylistItems />
            <RecommendedForYou />
        </div>        
    )
}

export default RightItem;