import React from 'react';
import "../style/SignComplete.css";
import registerHeart from "../images/register_heart.png"
import AfterLoginNavbar from '../components/AfterLoginNavbar';
import { useNavigate } from 'react-router-dom';
const SignComplete = () => {
    const navigate = useNavigate();
    const HandleButtonToSubmit=()=>{
        navigate('/matching-submit');
    }
    return (
        <div className='background-color'>
            <AfterLoginNavbar/>
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
                <button className='findMate-button' onClick={HandleButtonToSubmit}>룸메이트 찾으러 가기</button>
            </div>

        </div>
    );
};

export default SignComplete;