import React, { useState } from "react";
import "../style/MatchingQSubmit2.css";
import AfterLoginNavbar from "../components/AfterLoginNavbar";

export const MatchingQSubmit2 = () => {
  // 각 질문의 답변 선택을 위한 상태
  const [selectedOption, setSelectedOption] = useState({
    question3: "", // 세 번째 질문 답변 상태 (Q3)
    question4: "", // 네 번째 질문 답변 상태 (Q4)
    question5: "", // 다섯 번째 질문 답변 상태 (Q5)
  });

  // 클릭 시 선택된 옵션을 변경하는 함수
  const handleClick = (question, option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [question]: option, // 해당 질문에 선택된 항목만 업데이트
    }));
  };

  return (
    <div className="matching-q-submit-2">
      <div className="overlap-2">
        <div className="text-wrapper-2">김감자님!</div>

        <div className="div-2">
          룸메이트 매칭을 위한
          <br />
          질문을 드릴게요.
        </div>

        <div className="text-wrapper-2-1">
          이제 매칭을 위한 질문에
          <br />
          답변해주세요.
        </div>


        <div className="overlap-group-2">
          <div className="p-2">Q4. 나는 집에 ____ 만큼 간다</div>

          <div className="text-wrapper-3-2">Q5. 내 본가는 ____ 이다</div>

          <div className="text-wrapper-4-2">Q3. 나는 _________ 이다.</div>

          <div
            className={`div-wrapper-2 ${
              selectedOption.question4 === "일주일에 3-4번" ? "selected" : ""
            }`}
            onClick={() => handleClick("question4", "일주일에 3-4번")}
          >
            <div className="text-wrapper-5-2">일주일에 3-4번</div>
          </div>

          <div
            className={`overlap-2-1 ${
              selectedOption.question4 === "일주일에 1-2번" ? "selected" : ""
            }`}
            onClick={() => handleClick("question4", "일주일에 1-2번")}
          >
            <div className="text-wrapper-6-2">일주일에 1-2번</div>
          </div>

          <div
            className={`overlap-3-2 ${
              selectedOption.question4 === "2-3주에 한 번" ? "selected" : ""
            }`}
            onClick={() => handleClick("question4", "2-3주에 한 번")}
          >
            <div className="text-wrapper-7-2">2-3주에 한 번</div>
          </div>

          <div
            className={`overlap-4-2 ${
              selectedOption.question4 === "한 달에 한 번" ? "selected" : ""
            }`}
            onClick={() => handleClick("question4", "한 달에 한 번")}
          >
            <div className="text-wrapper-8-2">한 달에 한 번</div>
          </div>

          <div className="group-2">
          <div
            className={`overlap-5-2 ${
              selectedOption.question5 === "서울" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "서울")}
          >
            <div className="text-wrapper-9-2">서울</div>
          </div>

          <div
            className={`overlap-6-2 ${
              selectedOption.question5 === "전북" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "전북")}
          >
            <div className="text-wrapper-9-2">전북</div>
          </div>

          <div
            className={`overlap-group-2-2 ${
              selectedOption.question5 === "경기도" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "경기도")}
          >
            <div className="text-wrapper-10-2">경기도</div>
          </div>

          <div
            className={`overlap-7-2 ${
              selectedOption.question5 === "전남" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "전남")}
          >
            <div className="text-wrapper-11-2">전남</div>
          </div>

          <div
            className={`overlap-8-2 ${
              selectedOption.question5 === "강원도" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "강원도")}
          >
            <div className="text-wrapper-10-2">강원도</div>
          </div>

          <div
            className={`overlap-9-2 ${
              selectedOption.question5 === "제주도" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "제주도")}
          >
            <div className="text-wrapper-10-2">제주도</div>
          </div>

          <div
            className={`overlap-10-2 ${
              selectedOption.question5 === "충북" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "충북")}
          >
            <div className="text-wrapper-9-2">충북</div>
          </div>

          <div
            className={`overlap-11-2 ${
              selectedOption.question5 === "해외" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "해외")}
          >
            <div className="text-wrapper-9-2">해외</div>
          </div>

          <div
            className={`overlap-12-2 ${
              selectedOption.question5 === "충남" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "충남")}
          >
            <div className="text-wrapper-9-2">충남</div>
          </div>

          <div
            className={`overlap-13-2 ${
              selectedOption.question5 === "경북" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "경북")}
          >
            <div className="text-wrapper-9-2">경북</div>
          </div>

          <div
            className={`overlap-14-2 ${
              selectedOption.question5 === "경남" ? "selected" : ""
            }`}
            onClick={() => handleClick("question5", "경남")}
          >
            <div className="text-wrapper-9-2">경남</div>
          </div>
        </div>

        </div>

        <div className="rectangle-wrapper-2">
          <div className="rectangle-2" />
        </div>

        <div className="overlap-15-2">
          <div className="rectangle-2-1" />
        </div>

        <AfterLoginNavbar/>
      </div>
    </div>
  );
};
