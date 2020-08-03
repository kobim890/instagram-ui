import React, {useEffect, useState} from 'react';
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import config from "../config";
import './Search.scss'
import Post from "../common/Post/Post";
import SearchResult from "./SearchResult/SearchResult";
function Search(props) {
    const [query, setQuery] = useState('');
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        async function getQuery() {
            const res = await fetch(config.apiUrl +'/users?username='+ query, {
                credentials:"include"
            });
            const fetchedUsers = await res.json();
            setUsers(fetchedUsers);
        }
        if(query){
            getQuery();
        }
    },[query]);

    function hasNoResults(){
        return query && users.length === 0;
    }
    return (
        <div className="d-flex flex-column Search">
            <div>
                <input type="text" placeholder="Search profile..."
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <hr className="line mx-3"></hr>
            <div className="d-flex flex-sm-column flex-lg-row">
                <div className="d-flex flex-sm-column flex-wrap">
                    {hasNoResults() ? <div>no results</div> : users.map(user => <SearchResult user={user} key={user._id}/>)}
                </div>
            </div>
        </div>
    );
}
export default Search;