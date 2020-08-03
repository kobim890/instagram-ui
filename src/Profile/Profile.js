import React, {useContext, useEffect, useState} from 'react';
import Avatar from "../common/Avatar/Avatar";
import { useParams } from 'react-router-dom';
import config from "../config";
import Post from "../common/Post/Post";
import ProfileUser from "./ProfileUser/ProfileUser";

function Profile(props) {

    const {id} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        if(!id){
            return;
        }
        getPosts();
    }, [id]);


    async function getPosts() {
        try {
            const fetchedPosts = await( await fetch(config.apiUrl +`/users/${id}/posts?sort=-1`,{
                credentials:"include"
            })).json();
            setPosts(fetchedPosts);
        }catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
          <ProfileUser userId={id} postsNum={posts.length} />
            <div className="d-flex flex-wrap">
                {posts.map(post => {
                    return <Post data={post} key={post._id}/>;
                })}
            </div>
        </div>
    );
}

export default Profile;