import React from 'react';
import Avatar from "../../../common/Avatar/Avatar";
import Moment from "react-moment";
import './PostComment.scss'
import {Link} from "react-router-dom";


function PostComment(props) {
    return (
            <div className="PostComment d-flex flex-column">
                <div className="userComment">
                    <Link to={`/profile/${props.data.user._id}`}>
                        <Avatar size="sm" image={props.data.user.avatar}/>
                    </Link >
                    <div className="ml-1">{props.data.user.username}</div>
                </div>
                <Moment className="commentDate" format="MMM D">{props.data.createdAt}</Moment>
                <div>{props.data.content}</div>
            </div>
    );
}

export default PostComment;