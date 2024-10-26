import React from 'react';
import '../style/RegisterPage.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { sign } from "../apis/sign";
import { useForm } from '../hooks/useForm';

const RegisterPage = () => {
    const [email, onChangeEmail] = useForm();
    const [password, onChangePw] = useForm(); 
    const [name, onChangeName] = useForm();
    const [phone_number, onChangePhone] = useForm(); 
    const [room_capacity, onChangeRoom] = useForm();
    const [gender, onChangeJender] = useForm(); 
    const [nickname, onChangeNickname] = useForm();
    const [birth, onChangeBirth] = useForm();
    const router = useNavigate();

    const onClick = async () => {
        await sign(email, password, name, phone_number, room_capacity, gender, nickname, birth);
        router('/');
    };

    return (
        <div className='app-background'>
            <Navbar />
            <div className='register-mainpage'>
                <div className='register-title'>CatHouse</div>
                <form className='register-form'>
                    <fieldset className='no-border'>
                        <legend className='register-text'>회원가입</legend>
                        <div className='email-container'>
                            <input type="text" className='register-input' placeholder='@catholic.ac.kr' value={email} onChange={onChangeEmail} />
                            <button type="button" className='email-checkbutton'>이메일 중복 확인</button>
                        </div>
                        <div className='pwd-container'>
                            <input className='register-input' type="password" placeholder='비밀번호를 입력해주세요 (문자, 숫자 , 특수문자를 포함 8~20자)' 
                            value={password} onChange={onChangePw} />
                        </div>
                        <div className='pwd-container'>
                            <input type="password" className='register-input' placeholder='비밀번호를 재입력' />
                            <button type="button" className='pwd-checkbutton'>비밀번호 확인</button>
                        </div>
                        <div className='input-container'>
                            <label htmlFor="username" className='input-label'>이름</label>
                            <input type='text' id='username' placeholder='이름을 입력하세요' className='name-input'
                                value={name} onChange={onChangeName} />
                            <label className='phone-label'>전화번호</label>
                            <input type='text' placeholder='전화번호를 입력하세요' className='phone-input'
                                value={phone_number} onChange={onChangePhone} />
                        </div>
                        <div className='input-container'>
                            <label className='room-label'>선호 호실</label>
                            <input type='text' placeholder='몇 인실?' className='room-input'
                                value={room_capacity} onChange={onChangeRoom} />
                            <label className='sex-label'>성별</label>
                            <input type='text' placeholder='성별' className='sex-input'
                                value={gender} onChange={onChangeJender} />
                            <label className='register-nickname-label'>닉네임</label>
                            <input type='text' placeholder='닉네임을 입력해주세요' className='register-nickname-input'
                                value={nickname} onChange={onChangeNickname} />
                            <label className='register-nickname-label'>생일</label>
                            <input type='text' placeholder='생일을 입력해주세요' className='register-nickname-input'
                                value={birth} onChange={onChangeBirth} />
                        </div>
                        <button type="button" className='register-button' onClick={onClick}>회원가입</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
