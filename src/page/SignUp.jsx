import React from 'react';
import '../style/SignUp.css';
import Navbar from '../components/Navbar';

export const SignUp = () => {
    return (
        <div className='login-sign-up'>
            <Navbar/>

            
            <div className="overlap-group">
              <div className="cathouse-title">CatHouse</div>
              <div className="text-wrapper">회원가입</div>
              <div className="sign-mail-text">
                입력하신 메일로 인증 메일을 보내드렸어요.
                <br />
                확인 후 ‘인증’ 버튼을 눌러주세요.
              </div>
            </div>
           
        </div>
       
    );
  };