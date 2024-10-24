import React from 'react';
import "../style/MainHeader.css"
const MainHeader = () => {
    return (
        <div className='header-style'>
            <div className='header-gap'>
                <button className='header-button'>Home</button>
                <button className='header-button'>MENU</button>
            </div>
            <div className='header-gap'>
                <button className='header-button'>LOGIN</button>
                <button className='header-button'>MY PAGE</button>
            </div>
        </div>
    );
};

export default MainHeader;