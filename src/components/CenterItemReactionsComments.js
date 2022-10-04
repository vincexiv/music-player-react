import React from 'react'


function CommentListItem({comment}){
    return (
        <li>
            <p>{comment.content}</p>
            <span className="commenter-name">{comment.commenterName || 'unknown'}</span>            
        </li>        
    )
}

export default CommentListItem