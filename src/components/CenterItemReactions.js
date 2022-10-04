import React from 'react'

function CenterItemReactions(){
    return (
        <>
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
        </>        
    )
}

export default CenterItemReactions