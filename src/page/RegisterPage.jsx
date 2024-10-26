import React from 'react';
import '../style/RegisterPage.css';
const RegisterPage = () => {
    
    return (
        <div className='register-mainpage'>
            <div className='register-title'>CatHouse</div>
            <form className='register-form'>
                 <fieldset className='no-border'>
                        <legend className='register-text'>회원가입</legend>
                        <form className='email-container'>
                            <input type="text" className='register-input' placeholder='@catholic.ac.kr' />
                            <button className='email-checkbutton'>이메일 중복 확인</button>
                        </form>
                        <form className='pwd-container' ><input className='register-input' type="password" placeholder='비밀번호를 입력해주세요 (문자, 숫자 , 특수문자를 포함 8~20자)' /></form>
                        <form className='pwd-container'> 
                            <input type="password" className='register-input' placeholder='비밀번호를 재입력' />
                            <button className='pwd-checkbutton'>비밀번호 확인</button>
                        </form>
                        <form>
                            <div className='input-container'>
                                <label for="username" className='input-label'>이름</label>
                                <input type='text' id='username' placeholder='이름을 입력하세요' className='name-input'></input>
                                <label className='phone-label'>전화번호</label>
                                <input type='text' placeholder='전화번호를 입력하세요' className='phone-input'></input>
                            </div>
                            <div className='input-container'>
                                <label className='room-label'>선호 호실</label>
                                <input type='text' placeholder='몇 인실?' className='room-input'></input>
                                <label className='sex-label'>성별</label>
                                <input type='text' placeholder='성별' className='sex-input'></input>
                                <label className='register-nickname-label'>닉네임</label>
                                <input type='text' placeholder='닉네임을 입력해주세요' className='register-nickname-input'></input>
                            </div>
                        </form>    
                        <button className='register-button'>회원가입</button>
                 </fieldset>
            </form>
        </div>
    );
};

export default RegisterPage;