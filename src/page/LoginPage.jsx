import React from 'react';
import "../style/LoginPage.css"
import "../components/Navbar";
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const handleButtonToRegister = ()=>{
        navigate('/register');
    }
    return (    
        <div>
            <Navbar/>
            <div className='login-mainpage'>
                <div className='login-title'>CatHouse</div>
                <form className='login-form'>
                     <fieldset className='no-border'>
                        <legend className='center-legend'>로그인</legend>
                          <input type="text" id="id"  className='login-input' placeholder='이메일을 입력해주세요...'/>
                          <input type="password" id="passowrd" className='login-input'placeholder='비밀번호를 입력해주세요...'/>
                          <button className= 'find-password'type='button'>아이디/비밀번호 찾기</button>
                          <button className='login-button' type='submit'>로그인하기</button>
                          <div className='newuser-question'>신규회원이신가요?</div>
                          <button className='gotoRegister-button'type='button' onClick={handleButtonToRegister} >회원가입</button>
                     </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;