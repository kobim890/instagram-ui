import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import './Menu.scss'
import {UserContext} from "../user-context";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faSearch, faHeart } from '@fortawesome/free-solid-svg-icons';
import instagramlogo from './instagramLogo.png'
import MenuAvatar from "./MenuAvatar/MenuAvatar";
import Avatar from "../common/Avatar/Avatar";

function Menu(props) {
    const { user } = useContext(UserContext)

    return (
        <div className="Menu">
        <nav className="navbar  d-flex mb-1 navbar-dark ">
            <a className="navbar-brand" href="#">
                <img className="instagram-logo d-none d-lg-block" src={instagramlogo}/>
            </a>
                <ul className="nav mr-auto d-flex flex-grow-1 justify-content-around justify-content-lg-end ">
                    <li className="nav-item active">
                        <Link className="nav-link " to="/">
                            <FontAwesomeIcon className="nav-icon" icon={faHome}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/post/create'>
                            <FontAwesomeIcon className="nav-icon" icon={faPlus}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/search'>
                            <FontAwesomeIcon className="nav-icon" icon={faSearch}/>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/notification'>
                            <FontAwesomeIcon className="nav-icon" icon={faHeart}/>
                        </Link>
                    </li>
                    <li>
                        <MenuAvatar/>
                    </li>
                </ul>
        </nav>
        </div>
    );
}

export default Menu;