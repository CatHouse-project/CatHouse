import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom'; 
const HomeNavbar = () => {
    return (
        <div className='navbar-style'>
           <div className='navbar-gap'>
                <div className='navbar-button'>Home</div>
                <div className='navbar-button'>MENU</div>
            </div>
            <div className='navbar-gap'>
                <Link to="/LOGIN" className='navbar-button'>LOGIN</Link>
                <div className='navbar-button'>MY PAGE</div>
            </div>
        </div>
    );
};

export default HomeNavbar;