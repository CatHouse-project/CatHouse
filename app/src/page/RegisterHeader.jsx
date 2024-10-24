import React from 'react';
import "../style/RegisterHeader.css"
const RegisterHeader = () => {
    return (
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"30px 40px"}}>
            <div style={{display:"flex",gap:"3vw"}}>
                <button className='header-button'>Home</button>
                <button className='header-button'>MENU</button>
            </div>
            <div style={{display:"flex",gap:"3vw"}}>
                <button className='header-button'>MY PAGE</button>
            </div>
        </div>
    );
};

export default RegisterHeader;