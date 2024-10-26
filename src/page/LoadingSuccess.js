import React from "react";
import loading_heart from '../images/loading_heart.png';
import "../style/LoadingSuccess.css"
import AfterLoginNavbar from "../components/AfterLoginNavbar";
import { Link } from "react-router-dom";

export const LoadingSuccess = () => {
  return (
    <div className="matching-success">
      <div className="overlap-group">
        <div className="overlap">
          <p className="text-wrapper">
            김감자님이 선택한 룸메이트에게 신청을 보냈어요!
          </p>
        </div>

        <div className="div"> 룸메이트가 수락하면 알려드릴게요</div>

        <div className="text-wrapper-2">CatHouse</div>

        <img
          className="element"
          alt="Element"
          src={loading_heart}
        />
        <Link to={'/send-list'}>
          <div className="div-wrapper">
            <div className="text-wrapper-3">확인</div>
          </div>
        </Link>
        <AfterLoginNavbar/>
      </div>
    </div>
  );
};
