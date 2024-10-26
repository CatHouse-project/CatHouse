import React from "react";
import "../style/MatchingList.css";  // CSS 파일 경로
import AfterLoginNavbar from "../components/AfterLoginNavbar";

export const MatchingSendList = () => {
  return (
    <div className="matching-list">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <AfterLoginNavbar/>
          <div className="text-wrapper">CatHouse</div>
          <div className="div">내가 보낸 신청</div>
          <div className="text-wrapper-2">3건의 신청을 보냈어요</div>
        </div>


      </div>
    </div>
  );
};
