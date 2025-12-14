import React, { useMemo, useState } from "react";
import Quiz from "./components/Quiz";
import people from "./data/people";

export default function App() {
  const [genre, setGenre] = useState(null);
  const [viewedIds, setViewedIds] = useState(new Set());

  // 고유한 장르 목록 생성
  const genres = useMemo(() => {
    const s = new Set();
    people.forEach((p) => {
      if (p.genre) s.add(p.genre);
    });
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    if (!genre) return [];
    return people.filter((p) => p.genre === genre);
  }, [genre]);

  const handleQuizComplete = (viewedPersonIds) => {
    setViewedIds((prev) => new Set([...prev, ...viewedPersonIds]));
  };

  return (
    <div className="app">
      <header>
        <h1>2025년을 빛낸 인물 퀴즈</h1>
        <p>사진을 보고 장르별로 확인해보세요.</p>
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
            questions={genre === "all" ? people : filtered} 
            onBack={() => setGenre(null)}
            viewedIds={viewedIds}
            onViewedUpdate={handleQuizComplete}
          />
        )}
      </main>
      <footer>
        <small>이미지는 플레이스홀더입니다. 실제 사진으로 교체하세요.</small>
      </footer>
    </div>
  );
}