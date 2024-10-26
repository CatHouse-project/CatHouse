import React from 'react';
import heart from "../images/gradient_heart.png";
import "../style/MainPage.css";
import "../components/BeforeLoginNavbar";
import BeforeLoginNavbar from '../components/BeforeLoginNavbar';
import HomeNavbar from '../components/HomeNavbar';
import { useNavigate } from 'react-router-dom';
const MainPage = () => {
    const navigate= useNavigate();
    const handleButtonClick=()=>{
        navigate('/login');
    }
    return (
        <div className='background-color'>
            <HomeNavbar/>
            <div className="main-container">
                <div className="content-container">
                    <div className='title-font'>CatHouse</div>
                    <hr className="divider"/>
                    <div className='explanation-container'>service explanation contexts</div>
                    <div className='image-container'><img src={heart} alt="error" className="centered-image" /></div>
                    <button className='rounded-button' onClick={handleButtonClick}>소울&룸메이트 찾기</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
