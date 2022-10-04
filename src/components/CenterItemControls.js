import React from 'react'

function CenterItemControls(){
    return (
        <>
            <input type="range" start="0" end="100" value="0" id="song-progress" />
            <div id="controls">
                <i className="fa-solid fa-backward-step fa-1.5x"></i>
                <i className="fa fa-solid fa-circle-play fa-1.5x" id="play-pause-button"></i>
                <i className="fa-solid fa-circle-pause display-none fa-1.5x"></i>
                <i className="fa-solid fa-forward-step fa-1.5x"></i>
            </div>    
        </>    
    )    
}

export default CenterItemControls