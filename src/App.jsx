import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quiz from "./components/Quiz";
import people from "./data/people";

export default function App() {
  const navigate = useNavigate();
  const [genre, setGenre] = useState(null);
  const [viewedIds, setViewedIds] = useState(new Set());
  const [isAdmin, setIsAdmin] = useState(false);
  const [isJapanese, setIsJapanese] = useState(false);

  // Japanese 모드에서는 only 속성이 있는 항목 제외
  const availablePeople = useMemo(
    () => (isJapanese ? people.filter((p) => !p.only) : people),
    [isJapanese]
  );

  // 고유한 장르 목록 생성
  const genres = useMemo(() => {
    const s = new Set();
    availablePeople.forEach((p) => {
      if (p.genre) s.add(p.genre);
    });
    return Array.from(s);
  }, [availablePeople]);

  const filtered = useMemo(() => {
    if (!genre) return [];
    return availablePeople.filter((p) => p.genre === genre);
  }, [genre, availablePeople]);

  const handleQuizComplete = (viewedPersonIds) => {
    setViewedIds((prev) => new Set([...prev, ...viewedPersonIds]));
  };

  return (
    <div className="app">
      <header>
        <h1>2025년을 빛낸 인물 퀴즈</h1>
        <p>사진을 보고 장르별로 확인해보세요.</p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 8, flexWrap: "wrap" }}>
          <button className="home-back-button" onClick={() => navigate("/")}>
            ← 홈으로
          </button>
          <button
            onClick={() => setIsAdmin((v) => !v)}
            style={{
              padding: "4px 12px",
              fontSize: 12,
              background: isAdmin ? "#c00" : "#444",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {isAdmin ? "관리자 모드 ON" : "관리자 모드 OFF"}
          </button>
          <button
            onClick={() => setIsJapanese((v) => !v)}
            style={{
              padding: "4px 12px",
              fontSize: 12,
              background: isJapanese ? "#e07000" : "#444",
              color: "#fff",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            {isJapanese ? "🇯🇵 Japanese 모드 ON" : "🇯🇵 Japanese 모드 OFF"}
          </button>
        </div>
      </header>
      <main>
        {!genre ? (
          <div className="genre-select">
            <h2>장르를 선택하세요</h2>
            <div className="genre-list">
              <button key="all" className="genre-button" onClick={() => setGenre("all")}>
                🎲 랜덤
              </button>
              {genres.map((g) => (
                <button key={g} className="genre-button" onClick={() => setGenre(g)}>
                 {g}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <Quiz
            questions={genre === "all" ? availablePeople.filter((p) => p.order !== "9" && p.order !== 9) : filtered}
            onBack={() => setGenre(null)}
            viewedIds={viewedIds}
            onViewedUpdate={handleQuizComplete}
            isAdmin={isAdmin}
          />
        )}
      </main>
      <footer>
        <small>이미지는 플레이스홀더입니다. 실제 사진으로 교체하세요.</small>
      </footer>
    </div>
  );
}
