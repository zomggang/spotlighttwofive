import React, { useState, useEffect, useRef } from "react";

function normalizeMedia(photo) {
  // backward compatible: if photo is a string, treat as image
  if (!photo) return { type: "image", src: "" };
  if (typeof photo === "string") return { type: "image", src: photo };
  return photo;
}

export default function QuestionCard({ photo, alt, genre, onStateChange }) {
  const [countdown, setCountdown] = useState(3);
  const [blackScreen, setBlackScreen] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningFading, setWarningFading] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(false);
  const timersRef = useRef({ delay: null, fade: null, step: null, active: false });
  // support sequence of media items: photo can be a single media or an array of media
  const mediaSeq = Array.isArray(photo) ? photo : [photo];
  const [seqIndex, setSeqIndex] = useState(0);
  const media = normalizeMedia(mediaSeq[seqIndex]);

  // reset sequence index when photo prop changes
  useEffect(() => {
    setSeqIndex(0);
  }, [photo]);

  // 카운트다운 타이머
  useEffect(() => {
    // clear any existing timers
    if (timersRef.current.delay) clearTimeout(timersRef.current.delay);
    if (timersRef.current.fade) clearTimeout(timersRef.current.fade);
    if (timersRef.current.step) clearTimeout(timersRef.current.step);
    timersRef.current = { delay: null, fade: null, step: null, active: true };

    setCountdown(3);
    setBlackScreen(false);
    setShowName(false);
    setShowWarning(genre === "logo");
    setWarningFading(false);
    setControlsVisible(false);

    const initialDelay = genre === "logo" ? 1000 : 500;

    const startChainedCountdown = () => {
      // chained timeouts: 3->2 (0.5s), 2->1 (1s)
      const runStep = (current) => {
        if (!timersRef.current.active) return;
        const delayForCurrent = current === 3 ? 500 : 1000;
        timersRef.current.step = setTimeout(() => {
          if (!timersRef.current.active) return;
          if (current <= 1) {
              setBlackScreen(true);
            setCountdown(0);
              setControlsVisible(true);
            return;
          }
          setCountdown(current - 1);
          runStep(current - 1);
        }, delayForCurrent);
      };

      runStep(3);
    };
    // If the current media is text, skip automatic countdown and show text immediately
    if (media && media.type === "text") {
      setCountdown(0);
      setBlackScreen(false);
      setControlsVisible(true);
      return () => {
        timersRef.current.active = false;
        if (timersRef.current.delay) clearTimeout(timersRef.current.delay);
        if (timersRef.current.fade) clearTimeout(timersRef.current.fade);
        if (timersRef.current.step) clearTimeout(timersRef.current.step);
      };
    }

    timersRef.current.delay = setTimeout(() => {
      if (genre === "logo") {
        setWarningFading(true);
        // fade duration
        const fadeDuration = 400;
        timersRef.current.fade = setTimeout(() => {
          setShowWarning(false);
          setWarningFading(false);
          startChainedCountdown();
        }, fadeDuration);
      } else {
        startChainedCountdown();
      }
    }, initialDelay);

    return () => {
      timersRef.current.active = false;
      if (timersRef.current.delay) clearTimeout(timersRef.current.delay);
      if (timersRef.current.fade) clearTimeout(timersRef.current.fade);
      if (timersRef.current.step) clearTimeout(timersRef.current.step);
    };
  }, [photo, genre]);

  function resetPhoto() {
    // stop any running timers and do NOT restart countdown
    if (timersRef.current.delay) clearTimeout(timersRef.current.delay);
    if (timersRef.current.fade) clearTimeout(timersRef.current.fade);
    if (timersRef.current.step) clearTimeout(timersRef.current.step);
    timersRef.current = { delay: null, fade: null, step: null, active: false };

    // show the photo immediately without countdown
    setBlackScreen(false);
    setShowName(false);
    setCountdown(0);
    setShowWarning(false);
    setWarningFading(false);
    // keep controls visible so user can click buttons while photo is shown
    setControlsVisible(true);
    // if this is a sequence, reset to the first item
    setSeqIndex(0);
  }

  function revealName() {
    // If there is a next media in the sequence, advance to it instead of showing name
    if (mediaSeq && seqIndex < mediaSeq.length - 1) {
      setSeqIndex((s) => s + 1);
      // reset visual states for the next media; useEffect will handle timers
      setCountdown(3);
      setBlackScreen(false);
      setShowName(false);
      setShowWarning(false);
      setWarningFading(false);
      setControlsVisible(false);
      return;
    }
    setShowName(true);
  }

  return (
    <div className="card">
      <div className="photo-wrap">
        {showWarning ? (
          <div className={"black-screen warning-screen" + (warningFading ? " fade-out" : "")}>
            <div className="warning-text">⚠️ 로고 ⚠️<br/>주의!</div>
          </div>
        ) : blackScreen ? (
          <div className="black-screen">
            {showName && <div className="name-display">{alt}</div>}
          </div>
        ) : (
          <div className="photo-container">
            {media.type === "image" && (
              <img src={media.src} alt={alt} className="photo" />
            )}
            {media.type === "video" && (
              <video className="photo" src={media.src} controls muted playsInline />
            )}
            {media.type === "youtube" && (
              <div className="embed-wrap">
                <iframe
                  title={alt}
                  src={media.src && media.src.includes("youtube") ? media.src : `https://www.youtube.com/embed/${media.src}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
            {media.type === "text" && (
              <div className="text-media">{media.src}</div>
            )}
            {countdown > 0 && (
              <div key={countdown} className="countdown">{countdown}</div>
            )}
          </div>
        )}
      </div>

      {(blackScreen || controlsVisible) && (
        <div className="button-group">
          <button className="reveal-button" onClick={resetPhoto}>
            사진 다시보기
          </button>
          <button className="reveal-button" onClick={revealName}>
            정답확인
          </button>
        </div>
      )}

      {showName && (
        <button className="next-question-button" onClick={onStateChange}>
          다음 문제를 보기
        </button>
      )}
    </div>
  );
}