import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import config from "../../config";
import PostComment from "./PostComment/PostComment";
import CommentCreate from "./CommentCreate/CommentCreate";

function PostComments() {
    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        if(!id){
            return;
        }
        getComments();
    }, [id]);
    async function getComments() {
        try {
            const fetchedComments = await( await fetch(config.apiUrl +`/posts/${id}/comment`,{
                credentials:"include"
            })).json();
            console.log(fetchedComments);
            setComments(fetchedComments);
        }catch (err) {
            console.log(err)
        }
    }
    function onAddedComment(comment){
        setComments([...comments, comment])
    }
    return (
        <div>
            {comments.map(comment => {
                return <PostComment data={comment} key={comment._id}/>;
            })}
            <CommentCreate postId={id} onAdd={onAddedComment}/>
        </div>
    );
}

export default PostComments;