import React from 'react';
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './PostLike.scss'
function PostLike(props) {
    return (
        <div>
            <button>
                <FontAwesomeIcon className="likes-icon" icon={faHeart}/>
            </button>
        </div>
    );
}

export default PostLike;