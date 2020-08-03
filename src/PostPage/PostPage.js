import React, {useEffect, useState} from 'react';
import config from "../config";
import {useParams} from "react-router-dom";
import Moment from "react-moment";
import PostLike from "../common/Post/PostLike/PostLike";
import Loader from "../common/Loader/Loader";
import PostComments from "./PostComments/PostComments";


function PostPage(props) {

    const {id} = useParams();
    const [post, setPost] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        if(!id){
            return;
        }
        getPost();
    }, [id]);

    async function getPost() {
        try {
            const fetchedPost =  await (await fetch(config.apiUrl +`/posts/${id}`,{
                credentials:"include"
            })).json();
            console.log(fetchedPost);
            setPost(fetchedPost);
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            {isLoading && <Loader/>}
            {!isLoading && <div className="PostPage">
               <img src={`${config.apiUrl}/posts/${post.image}`} alt="postPicture"/>
               <div className="postLike d-flex">
                <div>{post.likes.length}</div>
                   <PostLike/>
               </div>
               <div>{post.description}</div>
               <div className="postDate">
                   <Moment format="MMM D">{post.createdAt}</Moment>
               </div>
                <div className="comment">
                    <PostComments postId={post._id}/>
                </div>
           </div>}
        </div>

    );
}

export default PostPage;