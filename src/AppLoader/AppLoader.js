import React from 'react';
import './AppLoader.scss';

function AppLoader(props) {
    return (
        <div>
            {props.show && <div className="App_loading">
                <div className="spinner"></div>
            </div>}
        </div>
    );
}

export default AppLoader;