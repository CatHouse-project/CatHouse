import React, { useState } from "react";
import "../style/MatchingQSubmit.css";
import Navbar from '../components/Navbar';
import AfterLoginNavbar from "../components/AfterLoginNavbar";
import { useNavigate } from "react-router-dom";
export const MatchingQSubmit = () => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleClick = (question, option) => {
    setSelectedOption(prev => ({
      ...prev,
      [question]: option
    }));
  };
  const navigate = useNavigate();
  const HandleButtonToSelect = ()=>{
    navigate('/select')
  }

  const questions = [
    { id: "question1", text: "휴지, 청소도구같은 공용용품은 어떻게 구매할까요?", options: "각자 구매, 같이 구매" },
    { id: "question2", text: "청소는 얼마나 자주하나요?", options: "일주일에 한번, 한달에 한번, 가끔 필요할때" },
    { id: "question3", text: "나의 생활패턴은?", options: "아침형, 저녁형" },
    { id: "question4", text: "나의 성격은?", options: "외향형, 내향형" },
    { id: "question5", text: "나의 본가는?", options: "서울, 경상도, 전라도, 충청도, 강원도, 경기도, 제주도, 기타 해외" },
    { id: "question6", text: "룸메랑의 친한정도는?", options: "서먹하지 않게만, 적당히, 완전 친해져요" },
    { id: "question7", text: "방에서 밥먹는거 어느정도까지 허용하나요?", options: "아예 금지, 간식류까지, 냄새 적은 밥까지, 전부 가능" },
    { id: "question8", text: "방에서 개인컴퓨터(혹은 기계식 키보드)", options: "쓸 수 있다, 쓸 수 없다" },
    { id: "question9", text: "잠자는 스타일은?", options: "조용하다, 코골이나 이갈이" },
    { id: "question10", text: "흡연을 하시나요?", options: "흡연, 비흡연" },
    { id: "question11", text: "현재 몇학년이신가요?", options: "1학년, 2학년, 3학년, 4학년" },
    { id: "question12", text: "집에 얼마나 자주 내려가나요?", options: "1주에 1-2번, 한 달에 2-3번, 한 달에 한 번, 거의 안 감" },
    { id: "question13", text: "평균 취침 시간이 어떻게 되나요?", options: "11시, 12시, 1시, 2시, 새벽 늦게" },
    { id: "question14", text: "방에서 통화는 어느정도까지 허용하나요?", options: "1분 이내, 5분 이내, 상관없다" },
    { id: "question15", text: "추위/더위를 많이 타나요?", options: "둘 다, 추위를 많이, 더위를 많이, 잘 못 느낌" },
    { id: "question16", text: "기숙사가 처음이신가요?", options: "그렇다, 그렇지 않다" },
    { id: "question17", text: "알람을 얼마나 잘 듣나요?", options: "잘 못 들음, 어느 정도 들음, 잘 들음" },
    { id: "question18", text: "시험공부는 보통 어디서 하나요?", options: "기숙사, 기숙사 밖" },
    { id: "question19", text: "일반사생인가요, 장기사생인가요?", options: "일반사생, 장기사생" },
    { id: "question20", text: "야식을 자주 먹나요?", options: "거의 안 먹음, 종종 먹음, 자주 먹음" },
    { id: "question21", text: "주말에 주로 뭘하나요?", options: "기숙사에, 외출, 아르바이트" },
    { id: "question22", text: "분리수거는 얼마나 자주 하나요?", options: "바로 버려요, 한 번에 모아서" },
    { id: "question23", text: "계열", options: "자연대, 이공대, 생과대, 인문대, 사회대" },
    { id: "question24", text: "나이가 어떻게 되시나요?", options: "~24, 25~27, 28~" }
  ];

  return (
    <div className="matching-q-submit">
      <div className="overlap-group">
        <div className="text-wrapper">김감자님!</div>
        <div className="text text-common">
          룸메이트 매칭을 위한
          <br />
          질문을 드릴게요.
        </div>
        <div className="text2 text-common">
          우선 매칭을 위한 질문에
          <br />
          답변해주세요.
        </div>
        <div className="overlap">
          {questions.map((q, index) => (
            <div className="question-box" key={q.id}>
              <div className="question-text">{"Q" + (index + 1) + ". " + q.text}</div>
              <div className="question-wrapper">
                {q.options.split(", ").map((option, idx) => (
                  <div
                    className={`quest-option ${selectedOption[`question${index + 1}`] === option ? "selected" : ""}`}
                    onClick={() => handleClick(`question${index + 1}`, option)}
                    key={idx}
                  >
                    <div className="quest-answer">{option}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <AfterLoginNavbar />
        {/* <button className="next-button-style" onClick={HandleButtonToSelect}>다음</button> */}
      </div>
    </div>
  );
};

export default MatchingQSubmit;
