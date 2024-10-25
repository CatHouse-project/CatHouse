import React from 'react';
import "../style/SignComplete.css";
import registerHeart from "../images/register_heart.png"
const SignComplete = () => {
    return (
        <div className='background-color'>
            <div className='header-style'>
                <div className='header-gap'>
                    <button className='header-button'>Home</button>
                    <button className='header-button'>MENU</button>
                </div>
                <div className='header-gap'>
                    <button className='header-button'>LOGOUT</button>
                    <button className='header-button'>MY PAGE</button>
                </div>
            </div>
            <div className='align-center'>
                <img src={registerHeart} alt="ERROR" className='image-position' />
                <div className='white-box'>
                    <div className='register-text'>회원가입 완료!</div>
                    <div className='explanation-text'>
                        나의 소울&룸메이트 찾기,
                        <br/>
                        CatHouse와 시작해요!
                    </div>
                </div>
                <button className='findMate-button'>룸메이트 찾으러 가기</button>
            </div>

        </div>
    );
};

export default SignComplete;