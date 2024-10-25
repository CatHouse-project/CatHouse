import React, { useState } from "react";
import "../style/MatchingQSubmit.css";

export const MatchingQSubmit = () => {

  const [selectedOption, setSelectedOption] = useState({
    question1: "",
    question2: "", 
    question3: "", 
  });


  const handleClick = (question, option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [question]: option,
    }));
  };

  return (
    <div className="matching-q-submit">
      <div className="overlap-group">
        <div className="text-wrapper">김감자님!</div>

        <div className="div">
          룸메이트 매칭을 위한
          <br />
          질문을 드릴게요.
        </div>

        <div className="text-wrapper-1">
          우선 매칭을 위한 질문에
          <br />
          답변해주세요.
        </div>

        <div className="overlap">
          <div className="text-wrapper-2">Q1. 나는 _____ 형 인간이다</div>

          <div className="text-wrapper-3">Q2. 나는 ____ 형 인간이다</div>

          <div className="text-wrapper-4">Q3. 나는 ____ 이다</div>

          {/* Q1 답변 선택 영역 */}
          <div
            className={`div-wrapper ${
              selectedOption.question1 === "내향" ? "selected" : ""
            }`}
            onClick={() => handleClick("question1", "내향")}
          >
            <div className="text-wrapper-5">내향</div>
          </div>

          <div
            className={`overlap-5 ${
              selectedOption.question1 === "중간" ? "selected" : ""
            }`}
            onClick={() => handleClick("question1", "중간")}
          >
            <div className="text-wrapper-5">중간</div>
          </div>



          <div
            className={`overlap-3 ${
              selectedOption.question1 === "외향" ? "selected" : ""
            }`}
            onClick={() => handleClick("question1", "외향")}
          >
            <div className="text-wrapper-6">외향</div>
          </div>

          {/* Q2 답변 선택 영역 */}
          <div
            className={`overlap-4 ${
              selectedOption.question2 === "오후" ? "selected" : ""
            }`}
            onClick={() => handleClick("question2", "오후")}
          >
            <div className="text-wrapper-6">오후</div>
          </div>
          
          <div
            className={`overlap-2 ${
              selectedOption.question2 === "아침" ? "selected" : ""
            }`}
            onClick={() => handleClick("question2", "아침")}
          >
            <div className="text-wrapper-5">아침</div>
          </div>



          <div
            className={`overlap-6 ${
              selectedOption.question2 === "새벽" ? "selected" : ""
            }`}
            onClick={() => handleClick("question2", "새벽")}
          >
            <div className="text-wrapper-5">새벽</div>
          </div>

          {/* Q3 답변 선택 영역 */}
          <div
            className={`overlap-7 ${
              selectedOption.question3 === "비흡연자" ? "selected" : ""
            }`}
            onClick={() => handleClick("question3", "비흡연자")}
          >
            <div className="text-wrapper-7">비흡연자</div>
          </div>

          <div
            className={`overlap-8 ${
              selectedOption.question3 === "흡연자" ? "selected" : ""
            }`}
            onClick={() => handleClick("question3", "흡연자")}
          >
            <div className="text-wrapper-6">흡연자</div>
          </div>
        </div>

        <div className="rectangle-wrapper">
          <div className="rectangle" />
        </div>

        <div className="overlap-9">
          <div className="rectangle-2" />
        </div>

        <div className="navbar">
          <div className="text-wrapper-8">HOME</div>
          <div className="text-wrapper-9">LOGOUT</div>
          <div className="text-wrapper-10">MY PAGE</div>
          <div className="text-wrapper-11">MENU</div>
        </div>
      </div>
    </div>
  );
};
