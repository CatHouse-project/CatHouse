import React from "react";
import "../style/MatchingList.css";  // CSS 파일 경로

export const MatchingList = () => {
  return (
    <div className="matching-list">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">CatHouse</div>
          <div className="div">내가 받은 신청</div>
          <div className="text-wrapper-2">4건의 신청이 들어왔어요</div>
        </div>

        <div className="navbar">
          <div className="text-wrapper-3">HOME</div>
          <div className="text-wrapper-4">LOGOUT</div>
          <div className="text-wrapper-5">MY PAGE</div>
          <div className="text-wrapper-6">MENU</div>
        </div>
      </div>
    </div>
  );
};
