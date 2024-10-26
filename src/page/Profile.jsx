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
                        <input type="text" id="nickname" name="nickname" className='profile-nickname-input' placeholder='닉네임을 입력해주세요'/>
                        <label for="nickname" className='nickname-text'>닉네임</label>
                        <button className='change-nickname-button'>닉네임 변경</button>
                    </div>
                    <button className='change-complete-button'>수정완료</button>
                </div>
                    <div className='second-frame'>
                        <div className='personal-box'>
                            <div className='personal-information-text'>개인정보</div>
                            <div className='personal-email'>cathouse@catholic.ac.kr</div>
                            <div className='profile-pwd-container'>
                                <input type="text" placeholder='비밀번호를 입력해주세요' className='profile-password-input'/>
                                <button className='profile-change-pwd-button'>비밀번호 변경</button>
                            </div>
                            <div className='name-phone-container'>
                                <div className='profile-name-text'>김감자</div>
                                <div className='profile-phone-text'>010-1234-5678</div>
                            </div>
                            <hr className='profile-line'/>
                            <div className='name-phone-container'>
                                <div className='profile-room-text'>3인실</div>
                                <div className='profile-depart-text'>공과대학</div>
                            </div>
                            <span className='position-name-text'>이름</span>
                            <span className='position-phone-text'>전화번호</span>
                            <span className='position-room-text'>선호 인실</span>
                            <span className='position-depart-text'>계열</span>
                        </div>
                        <div className='history-box'>
                            <span className='profile-myactive-text'>내 활동</span>
                            <span className='profile-match-text'>룸메이트 매칭</span>
                            <span className='profile-match-count'>3번</span>
                            <button className='show-history-button'>매칭 히스토리<br/>조회</button>
                        </div>
                    </div>
            </div>
           
        </div>
    );
};

export default Profile;