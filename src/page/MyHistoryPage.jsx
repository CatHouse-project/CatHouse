import React from 'react';
import '../style/MyHistoryPage.css'
import AfterLoginNavbar from '../components/AfterLoginNavbar';

const MyHistoryPage = () => {
    return (
        <div className='background-color1'>
             <AfterLoginNavbar/>
            <div className='align-center'>
                <span className='MYHISTORY-text'>MY HISTORY</span>
                <span className='show-roomate-text'>그동안 김감자님과 함께한 룸메이트에요</span>
            </div>
            <div className='history-container'>
                <div className='history-box-frame'>
                    <div className='arrange-div'>
                        <div className='history-title'>닉네임</div>
                        <div className='history-answer'>최고구마</div>
                    </div>
                    <div className='arrange-div'>
                        <div className='history-title'>김감자님과의 적합도</div>
                        <div className='history-answer'>95점</div>
                    </div>
                    <div className='arrange-div'>
                        <div className='history-title'>함께한 학기</div>
                        <div className='history-answer'>2024-1학기</div>
                    </div>
                </div>
                <div className='history-box-frame'>
                    <div className='arrange-div'>
                        <div className='history-title'>닉네임</div>
                        <div className='history-answer'>최고구마</div>
                    </div>
                    <div className='arrange-div'>
                        <div className='history-title'>김감자님과의 적합도</div>
                        <div className='history-answer'>95점</div>
                    </div>
                    <div className='arrange-div'>
                        <div className='history-title'>함께한 학기</div>
                        <div className='history-answer'>2024-1학기</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyHistoryPage;