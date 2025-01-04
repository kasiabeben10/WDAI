import React, { useState } from 'react';

interface Comment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: {
        id: number;
        username: string;
        fullName: string;
    }
}

const Komentarz: React.FC<Comment> = ({id, body, postId, likes, user}: Comment) => {

    const [likesCnt, setLikesCnt] = useState(likes);

    return (
        <div>
            <h3> Komentarz nr {id}, post {postId}</h3>
            <p>{user.id} {user.username} - {user.fullName} </p>
            <p>{body}</p>
            <p>{likesCnt} likes</p>
            <button onClick={() => setLikesCnt(likesCnt + 1)} style={{margin: '2px', width:'100px'}}>Like</button>
            <button onClick={() => setLikesCnt(likesCnt - 1)} style={{margin: '2px', width:'100px'}}>Dislike</button>
        </div>
    )
}

export default Komentarz;