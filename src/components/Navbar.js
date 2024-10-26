import React from 'react';
import '../style/Navbar.css';
const Navbar = () => {
    return (
        <div className='navbar-style'>
            <div className='navbar-gap'>
                <button className='navbar-button'>Home</button>
                <button className='navbar-button'>MENU</button>
            </div>
            <div className='navbar-gap'>
                <button className='navbar-button'>MY PAGE</button>
            </div>
        </div>
    );
};

export default Navbar;