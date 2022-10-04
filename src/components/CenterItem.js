import React from 'react'
import CenterItemCurrentlyPlaying from './CenterItemCurrentlyPlaying'
import CenterItemControls from './CenterItemControls'
import CenterItemReactions from './CenterItemReactions'

function CenterItem({currentlyPlaying, setCurrentlyPlaying}){
    return (
        <div className="center-item">
            <div id="controls-and-stuff">
                <CenterItemCurrentlyPlaying currentlyPlaying={currentlyPlaying}/>
                <CenterItemControls />
                <CenterItemReactions currentlyPlaying={currentlyPlaying} setCurrentlyPlaying={setCurrentlyPlaying}/>
            </div>
        </div>      
    )    
}

export default CenterItem