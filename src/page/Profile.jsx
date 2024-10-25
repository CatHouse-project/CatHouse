import React from 'react';
import "../style/Profile.css";
import vector from "../images/Vector.png";
const Profile = () => {
    return (
        <div className='background-color'>
            {/* 맨위 기본 버튼들 */} 
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
            {/* 밑에 화면들 구성 */}
            <div className='page-frame'>
                <div className='profile-box'>
                    <span className='myprofile-text'>내 프로필</span>
                    <div className='circle'>
                        <img src={vector} alt="ERROR" className='img-position' />
                    </div>
                    <div className='nickname-container'>
                        <input type="text" id="nickname" name="nickname" className='nickname-input' placeholder='닉네임을 입력해주세요'/>
                        <label for="nickname" className='nickname-text'>닉네임</label>
                        <button className='change-nickname-button'>닉네임 변경</button>
                    </div>
                    <button className='change-complete-button'>수정완료</button>
                </div>
                <div className='large-frame'>
                    <div className='second-frame'>
                        <div className='personal-box'></div>
                        <div className='history-box'></div>
                    </div>
                    <div className='third-frame '>
                        <div className='school-box'></div>
                        <div className='keyword-box'></div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Profile;