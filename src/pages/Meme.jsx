import React from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "../components/Quiz";
import memes from "../data/memes";

export default function Meme() {
  const navigate = useNavigate();

  return (
    <div>
      <header style={{marginBottom:12}}>
        <h2>빛나는 밈 퀴즈</h2>
        <p>다양한 포맷의 미디어(이미지, GIF, 비디오, 유튜브)를 확인해보세요.</p>
      </header>
      <Quiz questions={memes} onBack={() => navigate(-1)} />
    </div>
  );
}
