import React from 'react';
import heart from "../images/gradient_heart.png";
import "../style/MainPage.css";

const MainPage = () => {
    return (
        <div className="main-container">
            <div className="content-container">
                <div className='title-font'>CatHouse</div>
                <hr className="divider"/>
                <div className='explanation-container'>service explanation contexts</div>
                <div className='image-container'><img src={heart} alt="error" className="centered-image" /></div>
                <button className='rounded-button'>소울&룸메이트 찾기</button>
            </div>
        </div>
    );
};

export default MainPage;
