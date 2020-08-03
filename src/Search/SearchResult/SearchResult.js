import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import './SearchResult.scss'
import Avatar from "../../common/Avatar/Avatar";


function SearchResult(props) {

    return (
        <div className='SearchResult'>
                <Link  className="m-1 d-flex m-1" to={`/profile/${props.user._id}`}>
                    <Avatar size="md" image={props.user.avatar}/>
                    <div className="username">{props.user.username}</div>
                </Link>
        </div>
    );
}

export default SearchResult;