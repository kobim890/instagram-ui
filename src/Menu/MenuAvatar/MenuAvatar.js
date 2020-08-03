import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../../user-context";
import './MenuAvatar.scss'
import Avatar from "../../common/Avatar/Avatar";



function MenuAvatar() {
    const {user} = useContext(UserContext);

    return (
        <div className="MenuAvatar">
            <div className="nav-link" >
                <Link to={`/profile/${user._id}`}>
                    <Avatar size="sm" image={user.avatar} />
                </Link>
            </div>
        </div>
    );
}

export default MenuAvatar;