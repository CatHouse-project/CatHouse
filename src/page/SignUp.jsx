import React from 'react';
import '../style/SignUp.css';

export const SignUp = () => {
    return (
        <div className='login-sign-up'>
            <div className='header-style'>
                <div className='header-gap'>
                    <button className='header-button'>Home</button>
                    <button className='header-button'>MENU</button>
                </div>
                <div className='header-gap'>
                    <button className='header-button'>MY PAGE</button>
                </div>
            </div>

            
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