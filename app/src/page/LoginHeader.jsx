import React from 'react';
import '../style/LoginHeader.css';
const LoginHeader = () => {
    return (
        <div className='header-style'>
            <div className='header-gap'>
                <button className='header-button'>Home</button>
                <button className='header-button'>MENU</button>
            </div>
            <div className='header-gap'>
                <button className='header-button'>MY PAGE</button>
            </div>
        </div>
    );
};

export default LoginHeader;