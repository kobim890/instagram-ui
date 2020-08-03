import React, {useEffect, useState} from 'react';
import config from "../../config";
import Avatar from "../../common/Avatar/Avatar";
import Post from "../../common/Post/Post";


function ProfileUser(props) {

    const [profile, setProfile] = useState({})

    useEffect(()=>{
        getUser(props.userId)
    },[props.userId]);

    async function getUser(id) {
        try {
            const res = await fetch(`${config.apiUrl}/users/${id}`, {
                credentials: 'include'
            });
            const fetchedUser = await res.json();
            setProfile(fetchedUser);

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <Avatar className="m-5" image={profile.avatar} size="lg"/>
            <h3 className="pt-2">{profile.username}</h3>

        </div>
    );
}

export default ProfileUser;