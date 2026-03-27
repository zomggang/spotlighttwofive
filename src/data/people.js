// 예시 데이터: 반드시 실제 사용 전에 'photo' 값을 합법적인 이미지 URL(저작권 허용)로 교체하세요.
// 이미지 출처: Wikimedia Commons, CC0 라이선스, 또는 직접 제공한 이미지 권장.
// 저작권 경고: 저작권이 있는 이미지를 허가 없이 사용하면 법적 문제가 발생할 수 있습니다.
// 각 객체: { id, name, photo, genre }
// 베타 테스트용으로 로컬 이미지를 포함했으나, 공개 전 교체 또는 제거하세요.
import boriImg from "./bori.jpg";
import meImg from "./me.png";
import komedaLogo from "./komeda_logo.png";
const people = [
  {
    id: "p1",
    name: "제니 jennie",
    genre: "kpop",
    // 플레이스홀더 이미지를 사용했습니다. 실제 사진 URL로 바꿔주세요.
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg/960px-Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg",
  },
  {
    id: "p2",
    name: "필릭스 용복 리  Felix Yongbok Lee",
    genre: "kpop",
    order: "9",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Felix_of_Stray_Kids_at_a_Louis_Vuitton_event%2C_August_22%2C_2025.png/960px-Felix_of_Stray_Kids_at_a_Louis_Vuitton_event%2C_August_22%2C_2025.png",
  },
  {
    id: "p3",
    name: "강루미 HUNTR/X",
    genre: "kpop",
    photo:
      "https://static.wikia.nocookie.net/kpop-demon-hunters/images/3/31/Rumi_Portrait.png",
  },
  {
    id: "p4",
    name: "vaundy",
    genre: "jpop",
    photo:
      "https://vaundy.jp/static/vaundy/contents/upimg/56c027f04010965413f88192a77d1916.jpeg",
  },
  {
    id: "p6",
    name: "뚱이 patrick star",
    genre: "cartoon",
    photo:
      "https://i.pinimg.com/736x/b1/74/40/b174406023e2192222ade2b5a32dc664.jpg",
  },
  {
    id: "p7",
    name: "찰스엔터",
    genre: "etc",
    only: "kor",
    photo:
      "https://gogumafarm.kr/wp-content/uploads/2025/05/%EC%9C%A0%ED%8A%9C%EB%B8%8C_%EC%B0%B0%EC%8A%A4%EC%97%94%ED%84%B0_%EB%84%88_%EC%84%A0%EC%83%9D%EC%9D%B4%EC%95%BC_%EB%88%84%EB%82%98%EC%95%BC.png.jpg",
  },
  {
    id: "p8",
    name: "세븐틴 seventeen",
    genre: "kpop",
    photo:
      "https://www.kindpng.com/picc/m/0-5719_seventeen-logo-png-seventeen-png-transparent-png-seventeen.png",
  },
  {
    id: "p8",
    name: "CUTIE STREET",
    genre: "kpop",
    photo:
      "https://asobisystem.com/wp-content/uploads/2024/07/cutiestreet_2ndCD_artistphoto.jpg",
  },
  {
    id: "p9",
    name: "황정민",
    genre: "etc",
    only: "kor",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Hwang_Jung-Min.jpg/500px-Hwang_Jung-Min.jpg",
  },
  {
    id: "p10",
    name: "트와이스 twice",
    genre: "kpop",
    photo: "https://www.nehannn.com/img/group/98/98-0.jpg",
  },
  {
    id: "p10",
    name: "lady gaga",
    genre: "etc",
    photo:
      "https://dynamicmedia.livenationinternational.com/a/q/j/f657e09c-eaae-466c-80e3-1dc267b90ee0.jpg",
  },
  {
    id: "p11",
    name: "주디 홉스 judy hopps",
    genre: "cartoon",
    photo:
      "https://static.wikia.nocookie.net/zootopia/images/3/39/Judy_Hopps_Z2.PNG",
  },
  {
    id: "p12",
    name: "천사 소녀 네티 怪盗セイント・テール",
    genre: "cartoon",
    photo:
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FO3Pgt%2FbtsidlMdX2j%2FAAAAAAAAAAAAAAAAAAAAAOCcjLM2zwmXnQZR-S-ZrdpSviQJpW4NJMvQre9gpYwH%2Fimg.jpg%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1767193199%26allow_ip%3D%26allow_referer%3D%26signature%3DDcO3JFji5X%252BiIZABRpr8OoC0%252F8U%253D",
  },
  {
    id: "p13",
    name: "구교환",
    genre: "etc",
    only: "kor",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Koo_Kyo-hwan_211012.jpg/500px-Koo_Kyo-hwan_211012.jpg",
  },
  {
    id: "p14",
    name: "한강 han kang",
    genre: "etc",
    photo:
      "https://contents.kyobobook.co.kr/sih/fit-in/300x0/dtl/author/1000646901.jpg",
  },
  {
    id: "p15",
    name: "도요타 toyota",
    genre: "logo",
    photo:
      "https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png",
  },
  {
    id: "p16",
    name: "microsoft",
    genre: "logo",
    photo:
      "https://static.vecteezy.com/system/resources/previews/027/127/473/large_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
  },
  {
    id: "p16",
    name: "linux",
    genre: "logo",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/500px-Tux.svg.png",
  },
  {
    id: "p17",
    name: "pepsi",
    genre: "logo",
    photo:
      "https://www.designyourway.net/blog/wp-content/uploads/2023/04/pepsi-logo.jpg",
  },
  {
    id: "p18",
    name: "네이버 블로그",
    genre: "logo",
    only: "kor",
    photo:
      "https://designcompass.org/wp-content/uploads/2025/09/Naver-blog-rebranding-01.jpg",
  },
  {
    id: "p19",
    name: "화사 안혜진",
    genre: "kpop",
    only: "kor",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/20240712_Hwasa_%28%ED%99%94%EC%82%AC%29.jpg_%282%29.jpg/500px-20240712_Hwasa_%28%ED%99%94%EC%82%AC%29.jpg_%282%29.jpg",
  },
  {
    id: "p20",
    name: "김태리",
    genre: "etc",
    only: "kor",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Kim_Tae-ri_PRADA_BEAUTY_Photo_call_August_2024.png/500px-Kim_Tae-ri_PRADA_BEAUTY_Photo_call_August_2024.png",
  },
  {
    id: "p21",
    name: "김고은",
    genre: "etc",
    only: "kor",
    photo:
      "https://image.xportsnews.com/contents/images/upload/article/2024/0117/1705460431068438.jpg",
  },
  {
    id: "p23",
    name: "보리",
    genre: "etc",
    order: "9",
    photo: boriImg,
  },
  {
    id: "p24",
    name: "조강은 ggang",
    genre: "bori",
    photo: meImg,
  },
  {
    id: "p25",
    name: "하츄핑 hachu ping",
    genre: "cartoon",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8kUIPlOgIGtrqkoAD177XyjnJrYWIOJEiA&s",
  },
  {
    id: "p26",
    name: "긴토키 gintoki",
    genre: "cartoon",
    photo:
      "https://cdn.sketchpan.com/member/guest/draw/12696/1269660545724/0.png",
  },
  {
    id: "p27",
    name: "에렌 예거 eren yeager",
    genre: "cartoon",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3nK5V1NaM4nG8iIXFd1RqnjJ0nYH2hAyvww&s",
  },
  {
    id: "p28",
    name: "포치타 pochita",
    genre: "cartoon",
    photo:
      "https://times-abema.ismcdn.jp/mwimgs/d/3/375w/img_d38429c1b490bb96f69b58115322da7e115148.jpg",
  },
  {
    id: "p29",
    name: "阿部寛　abe hiroshi",
    genre: "jpn",
    photo:
      "https://img.ranking.net/uploads/item/image/8c/d8/1b/default_2000073566.jpg?v=1697557238",
  },
  {
    id: "p30",
    name: "木村拓哉 KIMURA TAKUYA",
    genre: "jpn",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDSYIJt6SBdIerX0Zs36DQk6fZOvm5rjeYBw&s",
  },
  {
    id: "p31",
    name: "市川 実日子 MIKAKO ICHIKAWA",
    genre: "jpn",
    photo:
      "https://realsound.jp/wp-content/uploads/2018/02/20180216_unnatural1.jpg",
  },
  {
    id: "p32",
    name: "橋本環奈 KANNA HASHIMOTO",
    genre: "jpn",
    photo:
      "https://image.kmib.co.kr/online_image/2018/1130/611815110012884125_1.jpg",
  },
  {
    id: "p33",
    name: "죠죠 jojo",
    genre: "cartoon",
    photo:
      "https://t1.daumcdn.net/brunch/service/user/avKu/image/pResGVNi6dRxa5MAG8twOW5srEc.jpg",
  },
  {
    id: "p34",
    name: "슬레이어즈 slayers",
    genre: "cartoon",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqZJZj4oN8hb-Qy3czQNl4bvGQQ_hrWO46A&s",
  },
  {
    id: "p35",
    name: "Rian gosling",
    genre: "eng",
    photo:
      "https://imgsrv2.voi.id/cYTXzKR4ZhFBWINZR1_2PVb8sjOAN6fTPFs58-euJGc/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy81NjY0NDIvMjAyNjAzMjYxODEyLW1haW4uY3JvcHBlZF8xNzc0NTIzNTQxLmpwZWc.jpg",
  },
  {
    id: "p36",
    name: "나pd",
    genre: "etc",
    only: "kor",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQrq3FLryYVqjRNCZKKeao6lKeKoh2UvfE0A&s",
  },
  {
    id: "p36",
    name: "コメダ珈琲",
    genre: "logo",
    photo: komedaLogo,
  },
  {
    id: "p37",
    name: "ミャクミャク",
    genre: "logo",
    photo:
      "https://www.tennojizoo.jp/wp-content/uploads/2023/08/myakumyaku_youkoso1.png",
  },
  {
    id: "p38",
    name: "初音ミク",
    genre: "cartoon",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxagU1J3yihPK_-BeQTe4KnIQN7GmraDij5g&s",
  },
  {
    id: "p40",
    name: "米津玄師",
    genre: "jpn",
    photo:
      "https://prcdn.freetls.fastly.net/release_image/55760/60/55760-60-5f7f8dbe213521ca4eeeb457717a4756-1500x1875.jpg?width=1950&height=1350&quality=85%2C65&format=jpeg&auto=webp&fit=bounds&bg-color=fff",
  },
  {
    id: "p41",
    name: "하울 howl",
    genre: "cartoon",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPikMsYflX0FYXGDOcM474i7mAwlC-eIlng&s",
  },
  {
    id: "p42",
    name: "faker",
    genre: "etc",
    only:"kor",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxLq1Xt_eGZA3TFhc2L_V5LE8-AOtoYUqMg&s",
  },
  {
    id: "p43",
    name: "충주맨 김선태",
    genre: "etc",
    only:"kor",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8ipY3x99PBxO5ItV7p0eCOq8H9k2lgi62w&s",
  },
  {
    id: "p44",
    name: "pikachu",
    genre: "cartoon",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNySwxrGBdwhmXOnFH5KU0aa6oE_GPBSCLpA&s",
  },
  {
    id: "p45",
    name: "宇多田ヒカル Hikaru Utada",
    genre: "jpn",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRZF_ZtcdabLaVB-5tdC2ocD6O0JeokqlEkQ&s",
  },
  {
    id: "p46",
    name: "protos starcraft",
    genre: "etc",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7JAHDotmZvfsY3qWKgSGRguHTraahoCDrQ&s",
  },
  {
    id: "p47",
    name: "강백호 桜木 花道",
    genre: "cartoon",
    photo:
      "https://slamdunk-movie.jp/files/images/p_main_sakuragi.jpg",
  },
  {
    id: "p48",
    name: "bts",
    genre: "etc",
    photo:
      "https://files.bts-official.jp/files_fc/img/profile/20220610/bts_all.jpg",
  },
  {
    id: "p49",
    name: "chatgpt",
    genre: "logo",
    photo:
      "https://images.seeklogo.com/logo-png/46/2/chatgpt-logo-png_seeklogo-465219.png",
  },{
    id: "p50",
    name: "anne hathaway",
    genre: "etc",
    photo:
      "https://img.wkorea.com/w/2025/07/style_68819b88f28d1-1920x1080.jpg",
  }
];

export default people;
