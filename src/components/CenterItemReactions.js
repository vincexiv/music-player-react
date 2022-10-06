import React, {useContext, useState} from 'react'
import { apiHost } from '../variables'
import { songDetails } from '../SongDetailsContextProvider'
import CommentListItem from './CenterItemReactionsComments'


function CenterItemReactions(){
    const {currentlyPlaying, userDetails, setCurrentlyPlaying} = useContext(songDetails)
    const [newComment, setNewComment] = useState("")

    const commentListItems = currentlyPlaying.comments.map(comment => <CommentListItem key={comment.id} comment={comment}/>)

    function handleNewComment(event){
        setNewComment(event.target.value)
    }

    function handleCommentSubmit(event){
        event.preventDefault()

        fetch(`${apiHost}/comments`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(
                {
                    playlist: currentlyPlaying.playList,
                    musicInfoId: currentlyPlaying.id,
                    commenterName: userDetails.userDetails.username,
                    content: newComment
                }
            )
        })
        .then(result => result.json())
        .then(data => {
            setCurrentlyPlaying({...currentlyPlaying, comments: [...currentlyPlaying.comments, data]})
        })
    }


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
            
            <form id="add-comment-form" onSubmit={(event) => handleCommentSubmit(event)}>
                <textarea cols="30" rows="10" placeholder="add comment" value={newComment} onChange={(event)=>handleNewComment(event)}></textarea>
                <input type="submit" className="btn" value="submit" />
            </form>        
        </>        
    )
}

export default CenterItemReactions