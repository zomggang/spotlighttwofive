// 예시 데이터: 반드시 실제 사용 전에 'photo' 값을 합법적인 미디어 URL(저작권 허용)로 교체하세요.
// 미디어 출처: CC0 라이선스, 퍼블릭 도메인, 또는 직접 제공한 콘텐츠 권장.
// 저작권 경고: 저작권이 있는 이미지/GIF/비디오/유튜브를 허가 없이 사용하면 법적 문제가 발생할 수 있습니다.
// 각 객체: { id, name, photo: { type, src }, genre }
// 베타 테스트용으로 외부 링크를 포함했으나, 공개 전 검토하세요.
const memes = [
  {
    id: "m1",
    name: "고양이 밈",
    genre: "funny",
    // simple image / gif
    photo: { type: "image", src: "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" },
  },
  {
    id: "m2",
    name: "댄스 클립",
    genre: "viral",
    // short mp4 video (remote)
    photo: { type: "video", src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  },
  {
    id: "m3",
    name: "유튜브 밈",
    genre: "viral",
    // youtube id or full url; QuestionCard will normalize
    photo: { type: "youtube", src: "dQw4w9WgXcQ" },
  },
  {
    id: "m4",
    name: "짧은 이미지",
    genre: "funny",
    photo: { type: "image", src: "https://placekitten.com/640/360" },
  }
  ,{
    id: "m5",
    name: "행부기 → 다음 이미지",
    genre: "viral",
    // sequence: first show text, then show an image when user reveals
    photo: [
      { type: "text", src: "행부기" },
      { type: "image", src: "https://placekitten.com/800/450" },
    ],
  }
];

export default memes;
