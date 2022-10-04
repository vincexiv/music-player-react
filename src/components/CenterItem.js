import React from 'react'

function CenterItem(){
    return (
        <div className="center-item">
            <div id="controls-and-stuff">
                <div id="currently-playing">
                    <div className="song-name">
                        <h1>I Remember You</h1> 
                        <i className="fa fa-regular fa-heart" id="favorite"></i>
                    </div>
                    <div id="playing-song-details">
                        <p className="artist-name">- Eilen Jewell</p>
                    </div>
                </div>
                <input type="range" start="0" end="100" value="0" id="song-progress" />
                <div id="controls">
                    <i className="fa-solid fa-backward-step fa-1.5x"></i>
                    <i className="fa fa-solid fa-circle-play fa-1.5x" id="play-pause-button"></i>
                    <i className="fa-solid fa-circle-pause display-none fa-1.5x"></i>
                    <i className="fa-solid fa-forward-step fa-1.5x"></i>
                </div>
                
                <div id="reactions">
                    <div className="reactions-details">
                        <ul id="comment-list">
                            
                        </ul>
                    </div>
                </div>
                <div className="reactions-summary">
                    <div id="comment-count">
                        <p><span className="count">0</span> comments</p>
                    </div>
                    <p id="like-count"><span className="count">107</span> likes</p>
                </div>
                
                <form id="add-comment-form">
                    <textarea cols="30" rows="10" placeholder="add comment"></textarea>
                    <input type="submit" className="btn" value="submit" />
                </form>
            </div>
        </div>      
    )    
}

export default CenterItem