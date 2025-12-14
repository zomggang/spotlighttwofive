import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="landing">
      <header style={{textAlign: 'center', marginBottom: 18}}>
        <h1>2025 마무리 게임</h1>
        <p>한 해를 돌아보며 기억나는 인물들을 확인해보세요.</p>
      </header>

      <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{display:'flex', gap:12}}>
              <Link to="/quiz" className="landing-cta">인물 퀴즈 시작</Link>
              <Link to="/meme" className="landing-cta landing-cta--alt">빛나는 밈</Link>
            </div>
      </div>

      <footer style={{marginTop:20, textAlign:'center', color:'#666'}}>
        <small>퀴즈는 사진 기반이며 개인용 리뷰용입니다.</small>
      </footer>
    </div>
  );
}
