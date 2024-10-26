import "../style/Menu.css";
import React from 'react';
import AfterLoginNavbar from "../components/AfterLoginNavbar";
import BeforeLoginNavbar from "../components/BeforeLoginNavbar";
import { Link } from "react-router-dom";
const Menu = () => {
    return (
        <div className="background-color">
            <AfterLoginNavbar/>
            <div className="menu-cathouse">CatHouse</div>
            <div className="menu-box">
                <div className="menu-text">MENU</div>
                <button className="find-roomate-button">룸메이트 찾기</button>
                <Link to={'/send-list'}><button className="my-request-button">내가 보낸 신청</button></Link>
                <Link to={'/matching-list'}><button className="receive-request-button">내가 받은 신청</button></Link>
            </div>
        </div>
    );
};

export default Menu;