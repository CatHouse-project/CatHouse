import React, { useState } from 'react';
import "../style/LoginPage.css";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import { login } from "../apis/login";

export const LoginPage = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const router = useNavigate();

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePw = (e) => {
        setPw(e.target.value);
    };

    const onLoginClick = async () => {
        console.log('Attempting login with:', { id, pw });
        try {
            const result = await login(id, pw);
            const { accessToken, refreshToken } = result;
            localStorage.setItem('access', accessToken);
            localStorage.setItem('refresh', refreshToken);
            console.log('Login successful:', result);
            router('/home');
        } catch (error) {
            console.error('Login failed:', error);
            alert('로그인 실패: 아이디 또는 비밀번호를 확인해 주세요.');
        }
    };

    const onRegisterClick = () => {
        router('/register');
    };

    return (
        <div>
            <Navbar/>
            <div className='login-mainpage'>
                <div className='login-title'>CatHouse</div>
                <form className='login-form'>
                    <fieldset className='no-border'>
                        <legend className='center-legend'>로그인</legend>
                        <input type="text" id="id" className='login-input' placeholder='이메일을 입력해주세요...' value={id} onChange={onChangeId}/>
                        <input type="password" id="password" className='login-input' placeholder='비밀번호를 입력해주세요...' value={pw} onChange={onChangePw}/>
                        <div>현재 ID: {id} / 현재 PW: {pw}</div>
                        <button className='find-password' type='button'>아이디/비밀번호 찾기</button>
                        <button className='login-button' onClick={onLoginClick} type='button'>로그인하기</button>
                        <div className='newuser-question'>신규회원이신가요?</div>
                        <button onClick={onRegisterClick} className='gotoRegister-button' type='button'>회원가입</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
