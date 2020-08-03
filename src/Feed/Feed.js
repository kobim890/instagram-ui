import React, {useEffect, useState} from 'react';
import './Feed.scss'
import config from "../config";
import Post from "../common/Post/Post";

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        async function getPosts() {
            const res = await fetch(config.apiUrl +'/posts?sort=-1', {
                credentials:"include"
            });

            const fetchedPosts = await res.json();
            console.log(fetchedPosts);
            setPosts(fetchedPosts);
        }
        getPosts();

    },[]);

    return (
        <div className="d-flex flex-wrap">
            {posts.map(post => {
                return <Post data={post} key={post._id}/>;
            })}
        </div>
    );
}

export default Feed;