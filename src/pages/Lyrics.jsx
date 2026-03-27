import React from "react";
import { useNavigate } from "react-router-dom";
import LyricsQuiz from "../components/LyricsQuiz";
import lyrics from "../data/lyrics";

export default function Lyrics() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <header>
        <h1>가사 번역 퀴즈</h1>
        <p>노래 가사를 한 줄씩 확인해보세요.</p>
        <button className="home-back-button" onClick={() => navigate("/")}>
          ← 홈으로
        </button>
      </header>
      <main>
        <LyricsQuiz songs={lyrics} />
      </main>
    </div>
  );
}
