import React from 'react';
import { Link } from 'react-router-dom'; 
import "../style/MainHeader.css";

const MainHeader = () => {
    return (
        <div className='header-style'>
            <div className='header-gap'>
                <Link to="/" className='header-button'>Home</Link>
                <Link to="/menu" className='header-button'>MENU</Link>
            </div>
            <div className='header-gap'>
                <Link to="/login" className='header-button'>LOGIN</Link>
                <Link to="/my-page" className='header-button'>MY PAGE</Link>
            </div>
        </div>
    );
};

export default MainHeader;
