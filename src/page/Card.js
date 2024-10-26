import React from "react";
import '../style/Card.css';
import { Link } from "react-router-dom"; // Link import 추가
import AfterLoginNavbar from "../components/AfterLoginNavbar";

export const Card = () => {
  return (
    <div>
      <AfterLoginNavbar/>
      <div className="matching-card">
        <div className="overlap">
          <div className="text-wrapper">CatHouse</div>
        </div>
        <div className="group">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper1">
          <div className="text-wrapper-5">훔메이트 신청</div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper2">
          <div className="text-wrapper-5">홈메이트 신청</div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper3">
          <div className="text-wrapper-5">홈메이트 신청</div>
        </div>
        <div className="group-2">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper4">
          <div className="text-wrapper-5">홈메이트 신청</div>
        </div>
        <div className="group-3">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper5">
          <div className="text-wrapper-5">홈메이트 신청</div>
        </div>
        <div className="group-4">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper6">
          <div className="text-wrapper-5">홈메이트 신청</div>
        </div>
        <div className="group-5">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper7">
          <div className="text-wrapper-5">훔메이트 신청</div>
        </div>
        <div className="group-6">
          <div className="overlap-group">
            <div className="div">닉네임</div>
            <div className="text-wrapper-2">김감자님과의 적합도</div>
            <div className="text-wrapper-3">95점</div>
            <div className="text-wrapper-4">최고구마</div>
          </div>
        </div>
        <div className="div-wrapper8">
          <div className="text-wrapper-5">홈메이트 신청</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-6">매칭 포기하기</div>
        </div>
        <p className="p">
          김감자님과의 적합도 점수가 높은 룸메이트들을 보여드릴게요.
        </p>
      
      </div>
    </div>
  );
};
