import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import config from '../../config';
import './Post.scss'
import PostLike from "./PostLike/PostLike";
import Avatar from "../Avatar/Avatar";
import { Link } from 'react-router-dom'


function Post(props) {
    console.log(props.data)
    return (
        <article className="col-lg-4 ">
            <div className="Post my-4">
                    <div className="postUser d-flex">
                        <Link to={`/profile/${props.data.user._id}`}>
                             <Avatar image={props.data.user.avatar}/>
                        </Link>
                        <div className="ml-1">{props.data.user.username}</div>
                    </div>
                <div className="imgFixer">
                    <Link to={`/post/${props.data._id}`}>
                        <img className="postImg" src={`${config.apiUrl}/posts/${props.data.image}`}/>
                    </Link>
                </div>
                <div className="postDate">
                    <Moment format="MMM D">{props.data.createdAt}</Moment>
                </div>
                <div className="postDesc ml-1">{props.data.description}</div>
                <div className="postLikes d-flex">
                    <div className="likesCount ml-1">{props.data.likes.length}</div>
                    <PostLike/>
                </div>

            </div>
        </article>

    );
}

export default Post;