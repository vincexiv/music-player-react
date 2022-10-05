import React, {useContext} from 'react'
import { currentlyPlayingSong } from '../CurrentlyPlayingContextProvider'
import CommentListItem from './CenterItemReactionsComments'


function CenterItemReactions(){
    const {currentlyPlaying, setCurrentlyPlaying} = useContext(currentlyPlayingSong)

    const commentListItems = currentlyPlaying.comments.map(comment => <CommentListItem key={comment.id} comment={comment}/>)

    return (
        <>
            <div id="reactions">
                <div className="reactions-details">
                    <ul id="comment-list">{commentListItems}</ul>
                </div>
            </div>
            <div className="reactions-summary">
                <div id="comment-count">
                    <p><span className="count">{currentlyPlaying.comments.length}</span> comments</p>
                </div>
                <p id="like-count"><span className="count">{currentlyPlaying.likes}</span> likes</p>
            </div>
            
            <form id="add-comment-form">
                <textarea cols="30" rows="10" placeholder="add comment"></textarea>
                <input type="submit" className="btn" value="submit" />
            </form>        
        </>        
    )
}

export default CenterItemReactions