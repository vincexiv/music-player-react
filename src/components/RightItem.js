import React from 'react'

function RightItem(){
    return (
        <div className="right-item">
            <h1>Up Next</h1>

            <ul id="up-next"></ul>

            <div id="playlist-buttons">
                <button className="btn active" id="favorites-playlist">Favorites</button>
                <button className="btn" id="blues-rock-playlist">Blues/Rock</button>
                <button className="btn" id="blues-jazz-playlist">Blues/Jazz</button>
                <button className="btn display-none" id="funk-disco-playlist">Funk/Disco</button>
                <button className="btn">More...</button>
            </div>
            
            <div id="play-list">
                <ul id="play-list-items"></ul>
            </div>

            <div className="bottom">
                <h1>Recommended For You</h1>
                <ul id="recommended-for-you">                               
                </ul>
            </div>
        </div>        
    )
}

export default RightItem;