import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom'; 
const AfterLoginNavbar = () => {
    return (
        <div className='navbar-style'>
            <div className='navbar-gap'>
                <Link to="/" className='navbar-button'>Home</Link>
                <Link to="/MENU" className='navbar-button'>MENU</Link>
            </div>
            <div className='navbar-gap'>
                <Link to="/" className='navbar-button'>LOGOUT</Link>
                <Link to="/profile" className='navbar-button'>MY PAGE</Link>
            </div>
        </div>
    );
};
{/* <div className='header-gap'>
<Link to="/" className='header-button'>Home</Link>
<Link to="/menu" className='header-button'>MENU</Link>
</div>
<div className='header-gap'>
<Link to="/login" className='header-button'>LOGIN</Link>
<Link to="/my-page" className='header-button'>MY PAGE</Link>
</div> */}
export default AfterLoginNavbar;