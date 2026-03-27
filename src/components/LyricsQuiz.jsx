import React, { useState, useEffect, useRef } from "react";

function getLangFromGerne(gerne = "") {
  if (gerne.includes("일본어")) return "ja-JP";
  return "ko-KR";
}

function speak(text, lang, rate = 1.0) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = rate;
  window.speechSynthesis.speak(utter);
}

export default function LyricsQuiz({ songs, onBack }) {
  const [songIndex, setSongIndex] = useState(0);
  const [revealedCount, setRevealedCount] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const [ttsOn, setTtsOn] = useState(true);
  const [ttsRate, setTtsRate] = useState(1.3);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const song = songs[songIndex];
  const isFinished = revealedCount >= song.lines.length;
  const lang = getLangFromGerne(song.gerne);

  // 2초마다 한 줄씩 자동으로 표시 (일시정지 중에는 멈춤)
  useEffect(() => {
    if (isFinished || paused) return;

    timerRef.current = setTimeout(() => {
      setRevealedCount((c) => c + 1);
    }, 2000);

    return () => clearTimeout(timerRef.current);
  }, [revealedCount, isFinished, paused]);

  // 새 줄이 공개될 때 TTS 읽기
  useEffect(() => {
    if (!ttsOn || revealedCount === 0) return;
    const line = song.lines[revealedCount - 1];
    if (line) speak(line, lang, ttsRate);
  }, [revealedCount, ttsOn, ttsRate]);

  // 곡이 바뀌면 초기화
  useEffect(() => {
    window.speechSynthesis?.cancel();
    setRevealedCount(0);
    setShowAnswer(false);
    setPaused(false);
  }, [songIndex]);

  // 언마운트 시 TTS 중단
  useEffect(() => {
    return () => window.speechSynthesis?.cancel();
  }, []);

  function togglePause() {
    if (!paused) {
      clearTimeout(timerRef.current);
      window.speechSynthesis?.cancel();
    }
    setPaused((v) => !v);
  }

  function restartSong() {
    window.speechSynthesis?.cancel();
    setRevealedCount(0);
    setShowAnswer(false);
    setPaused(false);
  }

  function nextSong() {
    if (songIndex + 1 < songs.length) {
      setSongIndex((i) => i + 1);
    } else {
      setAllDone(true);
    }
  }

  function restartAll() {
    setSongIndex(0);
    setRevealedCount(0);
    setShowAnswer(false);
    setAllDone(false);
  }

  if (allDone) {
    return (
      <div className="lyrics-quiz">
        <div className="lyrics-answer-screen" style={{ minHeight: 300, justifyContent: "center" }}>
          <div style={{ fontSize: 48 }}>🎵</div>
          <div className="lyrics-answer-title" style={{ fontSize: 28 }}>모든 곡 완료!</div>
          <div className="lyrics-answer-artist">수고하셨습니다 😊</div>
          <div className="button-group" style={{ marginTop: 24 }}>
            <button className="reveal-button" onClick={restartAll}>처음부터 다시</button>
            {onBack && (
              <button className="reveal-button" onClick={onBack}>홈으로</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lyrics-quiz">
      <div className="meta">
        {onBack && (
          <button className="reveal-button" onClick={onBack} style={{ marginRight: 12 }}>
            돌아가기
          </button>
        )}
        <span>{songIndex + 1} / {songs.length}</span>
        <button
          onClick={() => setTtsOn((v) => !v)}
          style={{
            marginLeft: 12,
            padding: "4px 10px",
            fontSize: 12,
            background: ttsOn ? "#ff6b9d" : "#aaa",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          {ttsOn ? "🔊 TTS ON" : "🔇 TTS OFF"}
        </button>
        {ttsOn && (
          <div style={{ marginLeft: 8, display: "flex", gap: 4 }}>
            {[0.7, 1.0, 1.3, 1.6].map((r) => (
              <button
                key={r}
                onClick={() => setTtsRate(r)}
                style={{
                  padding: "4px 8px",
                  fontSize: 11,
                  background: ttsRate === r ? "#ff6b9d" : "#ddd",
                  color: ttsRate === r ? "#fff" : "#333",
                  border: "none",
                  borderRadius: 6,
                  cursor: "pointer",
                }}
              >
                {r === 0.7 ? "느림" : r === 1.0 ? "보통" : r === 1.3 ? "빠름" : "매우빠름"}
              </button>
            ))}
          </div>
        )}
      </div>

      {showAnswer ? (
        <div className="lyrics-answer-screen">
          <div className="lyrics-answer-title">{song.title}</div>
          <div className="lyrics-answer-artist">{song.artist}</div>
          <div className="button-group" style={{ marginTop: 24 }}>
            <button className="reveal-button" onClick={restartSong}>
              처음부터
            </button>
            <button className="reveal-button" onClick={nextSong}>
              {songIndex + 1 < songs.length ? "다음 곡 →" : "다시 처음 곡으로"}
            </button>
          </div>
        </div>
      ) : (
        <div className="lyrics-card">
          <div className="lyrics-header">
            <div className="lyrics-artist">{song.gerne}</div>
          </div>

          <div className="lyrics-lines">
            {song.lines.map((line, i) => {
              if (i >= revealedCount) return null;
              const isCurrent = i === revealedCount - 1;
              return (
                <div
                  key={i}
                  className={"lyrics-line" + (isCurrent ? " lyrics-line--current" : " lyrics-line--past")}
                >
                  {line}
                </div>
              );
            })}

            {revealedCount === 0 && (
              <div className="lyrics-hint">잠시 후 가사가 자동으로 표시됩니다...</div>
            )}
          </div>

          <div className="button-group" style={{ marginTop: 16 }}>
            <button
              className="reveal-button"
              onClick={togglePause}
              style={{ background: paused ? "#2ea44f" : "#888" }}
            >
              {paused ? "▶ 재생" : "⏸ 일시정지"}
            </button>
            <button className="reveal-button" onClick={() => setShowAnswer(true)}>
              정답 확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
