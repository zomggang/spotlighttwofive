import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MENUS = [
  { path: "/quiz",   label: "인물 퀴즈 시작", cls: "landing-cta" },
  { path: "/meme",   label: "빛나는 밈",       cls: "landing-cta landing-cta--alt" },
  { path: "/lyrics", label: "🎵 가사 번역",    cls: "landing-cta landing-cta--lyrics" },
];

export default function Home() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(null); // { path, label }

  function handleClick(menu) {
    setPending(menu);
  }

  function confirm() {
    navigate(pending.path);
  }

  function cancel() {
    setPending(null);
  }

  if (pending) {
    return (
      <div className="landing" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "60vh", gap: 24 }}>
        <div className="confirm-box">
          <p className="confirm-title">"{pending.label}"을<br />시작하겠습니까?</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 24 }}>
            <button className="landing-cta" onClick={confirm}>예, 시작!</button>
            <button className="landing-cta landing-cta--alt" onClick={cancel}>아니요</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing">
      <header style={{ textAlign: "center", marginBottom: 18 }}>
        <h1>2025 마무리 게임</h1>
        <p>한 해를 돌아보며 기억나는 인물들을 확인해보세요.</p>
      </header>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {MENUS.map((m) => (
            <button key={m.path} className={m.cls} onClick={() => handleClick(m)}>
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <footer style={{ marginTop: 20, textAlign: "center", color: "#666" }}>
        <small>퀴즈는 사진 기반이며 개인용 리뷰용입니다.</small>
      </footer>
    </div>
  );
}
