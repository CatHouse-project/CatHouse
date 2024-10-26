import "../style/Menu.css";
import React from 'react';

const Menu = () => {
    return (
        <div className="background-color">
            <div className='header-style'>
                    <div className='header-gap'>
                        <button className='header-butto  n'>Home</button>
                        <button className='header-button'>MENU</button>
                    </div>
                    <div className='header-gap'>
                        <button className='header-button'>LOGOUT</button>
                        <button className='header-button'>MY PAGE</button>
                    </div>
            </div>
            <div className="menu-cathouse">CatHouse</div>
            <div className="menu-box">
                <div className="menu-text">MENU</div>
                <button className="find-roomate-button">룸메이트 찾기</button>
                <button className="my-request-button">내가 보낸 신청</button>
                <button className="receive-request-button">내가 받은 신청</button>
            </div>
        </div>
    );
};

export default Menu;