import React from 'react';
import './Avatar.scss'
import avatarDefault from  './avatarDefault.jpg'
import PropTypes from 'prop-types';

function Avatar(props) {
    const size = props.size || 'sm';
    const image = props.image || avatarDefault;
    const className = 'Avatar--' + size;

    return (
        <img className={"Avatar " + className} src={image} alt="profile picture"/>
    );
}
Avatar.propTypes = {
    size:PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;