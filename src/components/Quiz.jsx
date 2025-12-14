import React, { useState, useMemo } from "react";
import QuestionCard from "./QuestionCard";

function shuffleArray(arr) {
  return arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

export default function Quiz({ questions = [], onBack, viewedIds = new Set(), onViewedUpdate }) {
  const [finished, setFinished] = useState(false);
  const [sessionViewedIds, setSessionViewedIds] = useState(new Set());

  // 아직 안 본 인물들을 우선적으로, 본 인물들은 뒤에 배치
  const sortedQuestions = useMemo(() => {
    const unviewed = questions.filter((q) => !viewedIds.has(q.id));
    const viewed = questions.filter((q) => viewedIds.has(q.id));
    return [...unviewed, ...viewed];
  }, [questions, viewedIds]);

  // 정렬된 문제를 셔플한 후 인덱스 사용 (진행 상황 추적용)
  const shuffledQuestions = useMemo(
    () => shuffleArray(sortedQuestions),
    [sortedQuestions]
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = shuffledQuestions[currentIndex];

  function nextQuestion() {
    const newViewedIds = new Set(sessionViewedIds);
    newViewedIds.add(current.id);
    setSessionViewedIds(newViewedIds);

    const next = currentIndex + 1;
    if (next >= shuffledQuestions.length) {
      // 세션 완료 시 전체 뷰드 ID 업데이트
      if (onViewedUpdate) {
        onViewedUpdate(Array.from(newViewedIds));
      }
      setFinished(true);
    } else {
      setCurrentIndex(next);
    }
  }

  function restart() {
    setCurrentIndex(0);
    setSessionViewedIds(new Set());
    setFinished(false);
  }

  if (!questions || questions.length === 0) {
    return <div>문제 데이터가 없습니다. src/data/people.js를 확인하세요.</div>;
  }

  if (finished) {
    return (
      <div className="results">
        <h2>퀴즈 완료!</h2>
        <p>
          모든 인물을 확인했습니다.
        </p>
        <div style={{display: 'flex', gap: 10, flexDirection: 'column'}}>
          <button className="next-question-button" onClick={restart}>다시하기</button>
          {onBack && (
            <button className="reveal-button" onClick={onBack}>장르 선택으로 돌아가기</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="meta">
        {onBack && (
          <button className="reveal-button" onClick={onBack} style={{marginRight:12}}>
            장르 선택
          </button>
        )}
        <span>
          {currentIndex + 1} / {shuffledQuestions.length}
        </span>
      </div>
      <QuestionCard
        photo={current.photo}
        alt={current.name}
        genre={current.genre}
        onStateChange={nextQuestion}
      />
    </div>
  );
}