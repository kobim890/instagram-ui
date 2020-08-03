import React from 'react';

function Loader(props) {
    return (
        <div>
            {props.show && <div>Loading</div>}
        </div>
    );
}

export default Loader;