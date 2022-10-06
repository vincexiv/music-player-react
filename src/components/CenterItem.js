import React from 'react'
import CenterItemCurrentlyPlaying from './CenterItemCurrentlyPlaying'
import CenterItemControls from './CenterItemControls'
import CenterItemReactions from './CenterItemReactions'

function CenterItem(){

    return (
        <div className="center-item">
            <div id="controls-and-stuff">
                <CenterItemCurrentlyPlaying />
                <CenterItemControls />
                <CenterItemReactions />
            </div>
        </div>      
    )    
}

export default CenterItem