import React from "react";
import Navbar from "../components/Navbar";
import "../style/Select.css";

export const Select = () => {
  return (
    <div className="matching-q-select">
      <div className="overlap-text">김감자님!</div>
      <div className="overlap-text2">
        룸메이트 매칭을 위한
        <br />
        질문을 드릴게요.
      </div>
      <p className="overlap-text3">
        이제 가장 중요하다고 생각되는
        <br />
        질문 5개를 선택해주세요.
      </p>

      <div className="overlap-group">
        {[1, 2, 3, 4].map((index) => (
          <div className="question-group" key={index}>
            <div className="text-question-wrapper">
              <div className="text-question">Q{index}. 나는 외향/내향/중간형이다</div>
              <div className="custom-checkbox">
                <input type="checkbox" id={`checkbox${index}`} />
                <label htmlFor={`checkbox${index}`}></label>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navbar />
    </div>
  );
};
