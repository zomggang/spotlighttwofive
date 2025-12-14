// 예시 데이터: 반드시 실제 사용 전에 'photo' 값을 합법적인 이미지 URL(저작권 허용)로 교체하세요.
// 이미지 출처: Wikimedia Commons, CC0 라이선스, 또는 직접 제공한 이미지 권장.
// 저작권 경고: 저작권이 있는 이미지를 허가 없이 사용하면 법적 문제가 발생할 수 있습니다.
// 각 객체: { id, name, photo, genre }
// 베타 테스트용으로 로컬 이미지를 포함했으나, 공개 전 교체 또는 제거하세요.
import boriImg from "./bori.jpg";
import meImg from "./me.png";
const people = [
  {
    id: "p1",
    name: "제니",
    genre: "kpop",
    // 플레이스홀더 이미지를 사용했습니다. 실제 사진 URL로 바꿔주세요.
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg/960px-Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg",
  },
  {
    id: "p2",
    name: "필릭시 용복 리",
    genre: "kpop",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Felix_of_Stray_Kids_at_a_Louis_Vuitton_event%2C_August_22%2C_2025.png/960px-Felix_of_Stray_Kids_at_a_Louis_Vuitton_event%2C_August_22%2C_2025.png",
  },
  {
    id: "p3",
    name: "강루미",
    genre: "kpop",
    photo: "https://static.wikia.nocookie.net/kpop-demon-hunters/images/3/31/Rumi_Portrait.png",
  },
  {
    id: "p4",
    name: "vaundy",
    genre: "jpop",
    photo: "https://vaundy.jp/static/vaundy/contents/upimg/56c027f04010965413f88192a77d1916.jpeg",
  },
  {
    id: "p6",
    name: "뚱이",
    genre: "cartoon",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Patrick_Star_character.png/378px-Patrick_Star_character.png",
  },
  {
    id: "p7",
    name: "찰스엔터",
    genre: "etc",
    photo: "https://i.namu.wiki/i/19NRNCV0gDPSzAeCM6XuQvFl0zUzw1srqAkHhrPZeTpYgSblfymqQozya64_yPYdzKaOFfdHiCiX3Puu8ebDbA2I0JeYB_LRcZq2JlI4mcw5_NgXX2qrYKXu1Q6zN4gteGmSeuoFURsg2iq3htsnyQ.webp",
  },
  {
    id: "p8",
    name: "쉬밍하오 The 8",
    genre: "kpop",
    photo: "https://i.namu.wiki/i/quyS7UGeRWtQMaM5dfK88jX8Vy6tmrmYW5IUQo-KnV6lneKoVYvnGorydFS7vUqa2yOUL2BbKaj-WyDZVTMNu61btAQ4KgtYhlwDJxsqex2w69MAoaD8EB1rF0WMBoKIsP2rj5xHxkUQiSyKa-Np5g.webp",
  },
  {
    id: "p8",
    name: "CUTIE STREET",
    genre: "kpop",
    photo: "https://asobisystem.com/wp-content/uploads/2024/07/cutiestreet_2ndCD_artistphoto.jpg",
  },
  {
    id: "p9",
    name: "황정민",
    genre: "etc",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hwang_Jung-Min.jpg/500px-Hwang_Jung-Min.jpg",
  },
  {
    id: "p10",
    name: "트와이스",
    genre: "kpop",
    photo: "https://www.nehannn.com/img/group/98/98-0.jpg",
  },
  {
    id: "p10",
    name: "lady gaga",
    genre: "etc",
    photo: "https://dynamicmedia.livenationinternational.com/a/q/j/f657e09c-eaae-466c-80e3-1dc267b90ee0.jpg",
  },
  {
    id: "p11",
    name: "주디 홉스",
    genre: "cartoon",
    photo: "https://static.wikia.nocookie.net/zootopia/images/3/39/Judy_Hopps_Z2.PNG",
  },
  {
    id: "p12",
    name: "천사 소녀 네티",
    genre: "cartoon",
    photo: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FO3Pgt%2FbtsidlMdX2j%2FAAAAAAAAAAAAAAAAAAAAAOCcjLM2zwmXnQZR-S-ZrdpSviQJpW4NJMvQre9gpYwH%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1767193199%26allow_ip%3D%26allow_referer%3D%26signature%3DDcO3JFji5X%252BiIZABRpr8OoC0%252F8U%253D",
  },{
    id: "p13",
    name: "구교환",
    genre: "etc",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Koo_Kyo-hwan_211012.jpg/500px-Koo_Kyo-hwan_211012.jpg",
  },{
    id: "p14",
    name: "한강",
    genre: "etc",
    photo: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/dtl/author/1000646901.jpg",
  },{
    id: "p15",
    name: "도요타",
    genre: "logo",
    photo: "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png",
  },{
    id: "p16",
    name: "microsoft",
    genre: "logo",
    photo: "https://static.vecteezy.com/system/resources/previews/027/127/473/large_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
  },{
    id: "p16",
    name: "linux",
    genre: "logo",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/500px-Tux.svg.png",
  },{
    id: "p17",
    name: "pepsi",
    genre: "logo",
    photo: "https://www.designyourway.net/blog/wp-content/uploads/2023/04/pepsi-logo.jpg",
  },{
    id: "p18",
    name: "네이버 블로그",
    genre: "logo",
    photo: "https://designcompass.org/wp-content/uploads/2025/09/Naver-blog-rebranding-01.jpg",
  },{
    id: "p19",
    name: "화사 안혜진",
    genre: "kpop",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/20240712_Hwasa_%28%ED%99%94%EC%82%AC%29.jpg_%282%29.jpg/500px-20240712_Hwasa_%28%ED%99%94%EC%82%AC%29.jpg_%282%29.jpg",
  },{
    id: "p20",
    name: "김태리",
    genre: "etc",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kim_Tae-ri_PRADA_BEAUTY_Photo_call_August_2024.png/500px-Kim_Tae-ri_PRADA_BEAUTY_Photo_call_August_2024.png",
  },{
    id: "p21",
    name: "김고은",
    genre: "etc",
    photo: "https://image.xportsnews.com/contents/images/upload/article/2024/0117/1705460431068438.jpg",
  }
  ,{
    id: "p23",
    name: "보리",
    genre: "etc",
    photo: boriImg,
  },
  {
    id: "p24",
    name: "조강은",
    genre: "bori",
    photo: meImg,
  }
];

export default people;