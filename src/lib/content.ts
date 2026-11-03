import { L, type Copy } from "./i18n";

export function publicUrl(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export const navItems = [
  { to: "/", label: L("입구", "Pendapa", "Hall", "Lawang") },
  { to: "/history", label: L("역사", "Sejarah", "History", "Sajarah") },
  { to: "/artifacts", label: L("유물", "Artefak", "Objects", "Barang") },
  { to: "/sites", label: L("유적", "Situs", "Sites", "Situs") },
  { to: "/plan", label: L("배치·계획", "Denah", "Plan", "Rarancang") },
] as const;

export const ui = {
  skip: L("본문으로", "Ke isi", "Skip to content", "Ka eusi"),
  museum: L("반튼 술탄국", "Kesultanan Banten", "Banten Sultanate", "Kasultanan Banten"),
  virtual: L("가상 이미지", "Gambar virtual", "Virtual image", "Gambar maya"),
  pilot: L("파일럿 목업", "Purwa rupa", "Pilot", "Purwa rupa"),
  provisional: L("연도는 잠정", "Tahun belum dikunci", "Dates are provisional", "Taun acan dikonci"),
  review: L("확인 전", "Belum dikunci", "Not yet settled", "Acan pasti"),
  enter: L("전시로 들어가기", "Masuk ke pameran", "Enter the halls", "Asup ka pameran"),
  seePlan: L("배치와 구축 계획", "Denah dan rencana", "Layout and plan", "Denah jeung rencana"),
  recon: L("전성기 추정", "Perkiraan masa jaya", "Peak, conjectural", "Kiraan mangsa jaya"),
  today: L("오늘의 인상", "Kesan hari ini", "Today, an impression", "Kesan poé ieu"),
  heroNote: L(
    "슬라이더 양쪽 모두 가상 이미지입니다. 현장 사진이 아닙니다.",
    "Kedua sisi slider adalah gambar virtual, bukan foto lapangan.",
    "Both sides of the slider are virtual images, not field photographs.",
    "Dua sisi slider gambar maya, lain poto lapangan.",
  ),
  line1: L("반튼 술탄국", "Kesultanan Banten", "Banten Sultanate", "Kasultanan Banten"),
  line2: L("버추얼 박물관", "Museum Virtual", "Virtual Museum", "Musieum Virtual"),
  kicker: L("반튼 라마", "Banten Lama", "Old Banten", "Banten Lama"),
  lede: L(
    "스로소완과 카이본은 낮은 벽과 연못만 남았습니다. 이 박물관은 그 빈자리를 연표, 유물, 현장 영상으로 채웁니다.",
    "Surosowan dan Kaibon tinggal dinding rendah dan kolam. Museum ini mengisi kekosongan itu dengan linimasa, artefak, dan film situs.",
    "Surosowan and Kaibon survive as low walls and a pool. This museum fills that absence with a timeline, objects, and site film.",
    "Surosowan jeung Kaibon ngan témbok pendék jeung balong. Musieum ieu ngeusi kakosongan ku galur waktu, barang, jeung pilem situs.",
  ),
  menu: L("메뉴", "Menu", "Menu", "Menu"),
  close: L("닫기", "Tutup", "Close", "Tutup"),
  emptyShot: L(
    "이 장소의 가상 이미지는 만들지 않았습니다. 현장에서 찍습니다.",
    "Gambar virtual untuk tempat ini tidak dibuat. Nanti dipotret di lapangan.",
    "No virtual stand-in was made for this place. It will be filmed on site.",
    "Gambar maya tempat ieu teu dijieun. Engké dipotret di lapangan.",
  ),
  panHint: L(
    "옆으로 밀어 보십시오. 360° 영상이 아니라, 촬영 전의 자리입니다.",
    "Geser ke samping. Ini bukan video 360°, hanya penanda sebelum syuting.",
    "Drag sideways. This is not a 360° film, only a stand-in before the shoot.",
    "Geser ka gigir. Ieu lain vidéo 360°, ngan pananda saméméh syuting.",
  ),
  relatedScene: L("관련 장면", "Adegan terkait", "Related scene", "Adegan pakait"),
  relatedObject: L("관련 유물", "Artefak terkait", "Related object", "Barang pakait"),
  relatedSite: L("관련 유적", "Situs terkait", "Related site", "Situs pakait"),
  catalog: L("설명 카드", "Kartu keterangan", "Label", "Kartu katerangan"),
  holder: L("소장", "Simpanan", "Kept at", "Disimpen"),
  era: L("연대", "Tarikh", "Date", "Tarikh"),
  place: L("위치", "Letak", "Place", "Tempat"),
  kind: L("분류", "Jenis", "Class", "Jenis"),
  digital: L("디지털화", "Digitalisasi", "Digitizing", "Digitalisasi"),
  now: L("지금", "Kini", "Now", "Ayeuna"),
  point: L("영상 포인트", "Titik film", "What the film shows", "Nu rék dipidangkeun"),
  disclaimer: L(
    "모든 해설은 현지 감수 전입니다. 화면의 그림은 현장 사진이 아니라 파일럿용 가상 이미지이며, 추정 복원은 추정입니다.",
    "Semua teks belum ditinjau ahli setempat. Gambar di layar adalah gambar virtual untuk purwa rupa, bukan foto lapangan. Rekonstruksi adalah perkiraan.",
    "All text awaits local scholarly review. Pictures are virtual pilot images, not field photographs. Reconstructions are conjectural.",
    "Sadaya téks acan dipariksa ku ahli Banten. Gambar di dieu gambar maya, lain poto lapangan.",
  ),
  workshop: L(
    "체크는 이 기기에만 남습니다. 서버로 보내지 않습니다.",
    "Centang hanya tersimpan di perangkat ini.",
    "Checks stay on this device. They are not sent to a server.",
    "Cék ngan nyimpen di alat ieu.",
  ),
  settled: L("정리됨", "beres", "settled", "beres"),
  sheetTitle: L("화면 배치도", "Denah layar", "Screen plan", "Denah layar"),
  sheetNote: L(
    "웹 박물관의 동선입니다. 반튼에 건물을 짓는 시공도가 아니며, 축척이 없습니다.",
    "Ini alur museum web, bukan gambar kerja bangunan di Banten, dan tanpa skala.",
    "A route through the website, not a construction drawing for a building in Banten. No scale.",
    "Ieu alur musieum wéb, lain gambar wangunan di Banten, tanpa skala.",
  ),
  aerialCaption: L(
    "가상 조감. 네 개의 전시 공간을 건물처럼 펼쳐 본 인상입니다. 시공 제안이 아닙니다.",
    "Pandangan udara virtual. Kesan empat ruang jika dibayangkan sebagai bangunan. Bukan usulan konstruksi.",
    "A virtual aerial. Four rooms imagined as a building. Not a construction proposal.",
    "Pandangan udara maya. Opat rohangan dibayangkeun salaku wangunan. Lain usulan wangunan.",
  ),
  fromBrief: L("2026-10-31 기획안을 기준으로 한 0단계", "Tahap 0 dari naskah 31 Okt 2026", "Stage 0, from the 31 Oct 2026 brief", "Tahap 0 tina naskah 31 Okt 2026"),
};

export const messages: { n: string; title: Copy; body: Copy }[] = [
  {
    n: "01",
    title: L("국제 무역항", "Pelabuhan dagang", "A trading port", "Palabuhan dagang"),
    body: L(
      "반튼 라마에서는 중국, 일본, 베트남, 중동, 유럽의 도자기가 나옵니다. 해협의 항구였다는 증거입니다.",
      "Di Banten Lama keluar keramik Tiongkok, Jepang, Vietnam, Timur Tengah, dan Eropa. Itu bukti pelabuhan selat.",
      "Ceramics from China, Japan, Vietnam, the Middle East, and Europe come out of Old Banten. Evidence of a strait port.",
      "Di Banten Lama aya keramik ti Tiongkok, Jepang, Vietnam, Wétan Tengah, jeung Éropa.",
    ),
  },
  {
    n: "02",
    title: L("전성기와 저항", "Masa jaya dan lawan", "Peak and resistance", "Mangsa jaya jeung lawan"),
    body: L(
      "술탄 아겡 티르타야사 때 가장 번성했고, 네덜란드 동인도회사의 무역 독점에 맞섰습니다.",
      "Di masa Sultan Ageng Tirtayasa kesultanan paling makmur, dan menolak monopoli dagang VOC.",
      "Under Sultan Ageng Tirtayasa the realm was richest, and it resisted the VOC trade monopoly.",
      "Dina mangsa Sultan Ageng Tirtayasa karajaan pangmakmurna, nolak monopoli VOC.",
    ),
  },
  {
    n: "03",
    title: L("내분과 외세", "Retak dan campur tangan", "A split, then outsiders", "Retak jeung campur tangan"),
    body: L(
      "아겡과 아들 술탄 하지의 갈등에 네덜란드가 끼었습니다. 아겡은 바타비아에서 포로로 죽었고, 술탄국은 기울었습니다.",
      "Belanda masuk ke dalam konflik Ageng dan putranya, Sultan Haji. Ageng mati sebagai tawanan di Batavia, lalu kesultanan merosot.",
      "The Dutch entered the conflict between Ageng and his son, Sultan Haji. Ageng died a captive in Batavia, and the sultanate declined.",
      "Walanda asup kana paséa Ageng jeung putrana, Sultan Haji. Ageng maot tawanan di Batavia.",
    ),
  },
  {
    n: "04",
    title: L("오늘로 이어진 유산", "Warisan yang hidup", "What is still here", "Warisan anu hirup"),
    body: L(
      "아겡은 1970년 국가 영웅으로 추서되었습니다. 술탄 칭호는 2016년부터 다시 이어집니다. 살아 있는 사람의 이름은 감수 뒤에 적습니다.",
      "Ageng ditetapkan pahlawan nasional pada 1970. Gelar sultan berlanjut lagi sejak 2016. Nama yang masih hidup ditulis setelah tinjauan.",
      "Ageng was named a national hero in 1970. The sultan’s title continues again from 2016. Living names wait for review.",
      "Ageng jadi pahlawan nasional taun 1970. Gelar sultan diteruskeun deui ti 2016.",
    ),
  },
];

export const halls: {
  to: "/" | "/history" | "/artifacts" | "/sites";
  image: string;
  title: Copy;
  body: Copy;
  meta: Copy;
}[] = [
  {
    to: "/history",
    image: publicUrl("museum/gallery.webp"),
    title: L("역사 전시관", "Ruang sejarah", "History hall", "Rohangan sajarah"),
    body: L(
      "정복부터 1813년 퇴위까지 열한 장면. 장면마다 지도, 인물, 짧은 해설. 17세기 회사와 19세기 식민 정부는 나누어 적습니다.",
      "Sebelas adegan, dari penaklukan sampai penurunan takhta 1813. Setiap adegan: peta, tokoh, teks pendek.",
      "Eleven scenes, from the conquest to the 1813 deposition. Each one: a map, a person, a short text.",
      "Sabelas adegan, ti panaklukan nepi ka 1813.",
    ),
    meta: L("11장면", "11 adegan", "11 scenes", "11 adegan"),
  },
  {
    to: "/artifacts",
    image: publicUrl("museum/cannon.webp"),
    title: L("유물 전시관", "Ruang artefak", "Object hall", "Rohangan barang"),
    body: L(
      "대포, 석기, 도자기, 화폐, 건축 부재. 1차 후보입니다. 최종 선정은 소장처와 합니다.",
      "Meriam, batu, keramik, mata uang, bagian bangunan. Calon pertama. Pilihan akhir bersama penyimpan.",
      "Cannon, stone, ceramics, coins, building fragments. A first shortlist. The final choice is made with the collection.",
      "Meriam, batu, keramik, duit, bagian wangunan. Calon kahiji.",
    ),
    meta: L("후보 6점", "6 calon", "6 candidates", "6 calon"),
  },
  {
    to: "/sites",
    image: publicUrl("museum/masjid.webp"),
    title: L("유적 360° 영상관", "Ruang film 360°", "Site film hall", "Rohangan pilem 360°"),
    body: L(
      "반튼 라마의 여덟 곳. 폐허에는 사료가 받치는 범위만 전성기를 겹칩니다. 여기는 그 겹치기의 자리표시입니다.",
      "Delapan tempat di Banten Lama. Reruntuhan boleh ditimpa masa jayanya hanya sejauh sumber mengizinkan.",
      "Eight places in Old Banten. Ruins may be overlaid with a peak-era view only where sources allow.",
      "Dalapan tempat di Banten Lama.",
    ),
    meta: L("8곳", "8 situs", "8 places", "8 tempat"),
  },
];

export type Scene = {
  id: string;
  years: string;
  title: Copy;
  exhibit: Copy;
  body: Copy;
  review?: Copy;
  image?: string;
  imageAlt?: Copy;
  siteId?: string;
};

export const scenes: Scene[] = [
  {
    id: "s1526",
    years: "1526–1527",
    title: L("항구도시의 탄생", "Lahirnya kota pelabuhan", "A port city begins", "Lahirna kota palabuhan"),
    exhibit: L("지도로 보여줄 장면", "Adegan peta", "A map scene", "Adegan peta"),
    body: L(
      "시리프 히다야툴라, 곧 수난 구눙 자티가 반튼을 정복하고 순다 왕국을 점령했습니다. 반튼 라마가 새 수도가 됩니다.",
      "Syarif Hidayatullah, Sunan Gunung Jati, menaklukkan Banten dan menduduki kerajaan Sunda. Banten Lama menjadi ibu kota baru.",
      "Syarif Hidayatullah, Sunan Gunung Jati, conquered Banten and occupied the Sunda kingdom. Old Banten became the new capital.",
      "Syarif Hidayatullah, Sunan Gunung Jati, nalukkeun Banten. Banten Lama jadi ibukota anyar.",
    ),
    review: L(
      "‘건국’을 1526년 정복, 1527년 점령, 1552년 독립 중 무엇으로 쓸지 정해지지 않았습니다.",
      "Belum diputuskan mana yang disebut ‘berdiri’: taklukan 1526, pendudukan 1527, atau merdeka 1552.",
      "It is not decided which year is called the founding: the 1526 conquest, the 1527 occupation, or independence in 1552.",
      "Acan diputuskeun taun mana nu disebut ngadeg.",
    ),
    image: publicUrl("museum/city-air.webp"),
    imageAlt: L(
      "성벽과 운하가 있는 항구도시의 가상 항공 이미지",
      "Gambar udara virtual kota pelabuhan berparit",
      "Virtual aerial of a walled port city",
      "Gambar udara maya kota palabuhan",
    ),
  },
  {
    id: "s1552",
    years: "1552",
    title: L("마울라나 하산우딘", "Maulana Hasanuddin", "Maulana Hasanuddin", "Maulana Hasanuddin"),
    exhibit: L("인물 카드", "Kartu tokoh", "A person card", "Kartu jalma"),
    body: L(
      "치르본에서 독립하고 하산우딘이 즉위했습니다. 기획서는 스로소완 궁을 이 해에 둡니다. 궁은 지금 낮은 벽과 연못만 남았습니다.",
      "Merdeka dari Cirebon, Hasanuddin naik takhta. Naskah menaruh Keraton Surosowan pada tahun ini. Kini tinggal dinding rendah dan kolam.",
      "Independence from Cirebon, and Hasanuddin takes the throne. The brief places Surosowan palace in this year. Today only low walls and a pool remain.",
      "Merdeka ti Cirebon, Hasanuddin naik takhta. Keraton Surosowan diteundeun dina taun ieu.",
    ),
    image: publicUrl("museum/palace-recon.webp"),
    imageAlt: L(
      "연못과 층층 지붕이 있는 궁궐의 가상 복원",
      "Rekonstruksi virtual keraton dengan kolam dan atap bertingkat",
      "Virtual reconstruction of a palace with a pool and tiered roofs",
      "Rekonstruksi maya keraton",
    ),
    siteId: "surosowan",
  },
  {
    id: "s1570",
    years: "1570",
    title: L("해협의 양안", "Dua tepi selat", "Both shores", "Dua sisi selat"),
    exhibit: L("자바 서부와 수마트라 남부", "Jawa barat dan Sumatra selatan", "West Java and south Sumatra", "Jawa kulon jeung Sumatra kidul"),
    body: L(
      "하산우딘이 죽던 때, 술탄국은 순다 해협의 양쪽을 쥐고 있었습니다.",
      "Saat Hasanuddin wafat, kesultanan memegang kedua tepi Selat Sunda.",
      "When Hasanuddin died, the sultanate held both shores of the Sunda Strait.",
      "Waktu Hasanuddin maot, kasultanan nyepeng dua sisi Selat Sunda.",
    ),
  },
  {
    id: "s1596",
    years: "1596",
    title: L("유럽과의 첫 만남", "Pertama kali Eropa", "First meeting with Europe", "Pangheulana Éropa"),
    exhibit: L("함대의 도착", "Kedatangan armada", "A fleet arrives", "Datangna armada"),
    body: L(
      "코르넬리스 더 하우트만의 네덜란드 함대가 반튼에 닿았습니다.",
      "Armada Belanda Cornelis de Houtman tiba di Banten.",
      "Cornelis de Houtman’s Dutch fleet reached Banten.",
      "Armada Walanda Cornelis de Houtman dugi ka Banten.",
    ),
    image: publicUrl("museum/harbor.webp"),
    imageAlt: L(
      "범선과 창고가 있는 항구의 가상 이미지",
      "Gambar virtual pelabuhan dengan kapal layar dan gudang",
      "Virtual image of a harbor with sailing ships and warehouses",
      "Gambar maya palabuhan",
    ),
  },
  {
    id: "s1619",
    years: "1619",
    title: L("경쟁 항구", "Pelabuhan saingan", "A rival port", "Palabuhan lawan"),
    exhibit: L("바타비아의 등장", "Lahirnya Batavia", "Batavia appears", "Lahirna Batavia"),
    body: L(
      "얀 피테르스존 쿤이 자야카르타를 차지하고 바타비아를 세웠습니다. 반튼은 가까운 곳에 경쟁 항구를 둡니다.",
      "Jan Pieterszoon Coen mengambil Jayakarta dan mendirikan Batavia. Banten kini punya pelabuhan saingan di dekatnya.",
      "Jan Pieterszoon Coen took Jayakarta and founded Batavia. Banten now had a rival port nearby.",
      "Jan Pieterszoon Coen nyokot Jayakarta jeung ngadegkeun Batavia.",
    ),
  },
  {
    id: "s1651",
    years: "1651–1682",
    title: L("황금기", "Masa jaya", "The golden years", "Mangsa jaya"),
    exhibit: L("후추와 설탕", "Lada dan gula", "Pepper and sugar", "Lada jeung gula"),
    body: L(
      "술탄 아겡 티르타야사 시대입니다. 유럽 여러 나라와 거래했고, 회사의 독점에는 맞섰습니다. 전시는 이 시기를 가장 높은 번영으로 엽니다.",
      "Masa Sultan Ageng Tirtayasa. Berdagang dengan beberapa negeri Eropa, dan menolak monopoli Kompeni. Pameran membuka masa ini sebagai puncak.",
      "The reign of Sultan Ageng Tirtayasa. Trade with several European countries, and resistance to the Company’s monopoly. The hall opens this period as the peak.",
      "Mangsa Sultan Ageng Tirtayasa. Dagang jeung sababaraha nagara Éropa, nolak monopoli Kompeni.",
    ),
    review: L(
      "표기는 국가 영웅 공식인 Ageng을 잠정으로 씁니다. 사료에 따라 Agung이 맞다는 주장도 있어, 확정 전입니다.",
      "Ejaan sementara mengikuti pahlawan nasional: Ageng. Ada pendapat bahwa sumber menyebut Agung. Belum dikunci.",
      "The spelling Ageng follows the national-hero form, for now. Some scholars argue the sources say Agung. Not locked.",
      "Éjahan samentara Ageng, nuturkeun pahlawan nasional. Acan dikonci.",
    ),
    image: publicUrl("museum/harbor.webp"),
    imageAlt: L(
      "황금시간대의 향신료 항구, 가상 복원",
      "Pelabuhan rempah di cahaya senja, rekonstruksi virtual",
      "A spice harbor in late light, virtual reconstruction",
      "Palabuhan rempah, rekonstruksi maya",
    ),
  },
  {
    id: "s1682",
    years: "1682–1683",
    title: L("부자 갈등", "Ayah dan anak", "Father and son", "Ayah jeung anak"),
    exhibit: L("전환점", "Titik balik", "The turn", "Titik balikkeun"),
    body: L(
      "아겡이 아들 하지를 공격했습니다. 네덜란드가 개입하고 반튼은 보호국이 됩니다. 항구 입구에 스페일베이크 요새가 섭니다.",
      "Ageng menyerang putranya, Haji. Belanda campur tangan dan Banten menjadi protektorat. Benteng Speelwijk berdiri di mulut pelabuhan.",
      "Ageng attacked his son, Haji. The Dutch intervened and Banten became a protectorate. Fort Speelwijk was built at the harbor mouth.",
      "Ageng nyerang putrana, Haji. Walanda campur tangan, Banten jadi protektorat. Benteng Speelwijk nangtung di muara.",
    ),
    image: publicUrl("museum/fort.webp"),
    imageAlt: L(
      "해변의 벽돌 요새, 가상 이미지",
      "Benteng bata di tepi laut, gambar virtual",
      "A brick coastal fort, virtual image",
      "Benteng bata di basisir, gambar maya",
    ),
    siteId: "fort",
  },
  {
    id: "s1692",
    years: "1692",
    title: L("포로로 죽은 술탄", "Wafat sebagai tawanan", "Death in captivity", "Maot salaku tawanan"),
    exhibit: L("인물 카드, 아겡", "Kartu Ageng", "Ageng, a person card", "Kartu Ageng"),
    body: L(
      "아겡은 바타비아에서 포로로 생을 마쳤습니다. 1970년의 국가 영웅 추서는 각주로 두고, 이 장면의 연도는 죽음에 둡니다.",
      "Ageng wafat sebagai tawanan di Batavia. Penetapan pahlawan nasional tahun 1970 diletakkan sebagai catatan, bukan sebagai tahun adegan.",
      "Ageng died a captive in Batavia. The 1970 national-hero decree is a footnote, not the year of this scene.",
      "Ageng maot tawanan di Batavia. Gelar pahlawan 1970 ngan catetan.",
    ),
  },
  {
    id: "s1808",
    years: "1808",
    title: L("궁궐 파괴", "Keraton dirobohkan", "The palace destroyed", "Keraton dirubuhkeun"),
    exhibit: L("다엔델스의 명령", "Perintah Daendels", "Daendels’s order", "Parentah Daendels"),
    body: L(
      "다엔델스가 스로소완 파괴를 명령하고 술탄을 체포해 유배했다는 서술이 있습니다. 아래 메모가 풀리기 전에는 한 해로 잠그지 않습니다.",
      "Ada uraian bahwa Daendels memerintahkan penghancuran Surosowan dan menahan serta membuang sultan. Tahunnya tidak dikunci sebelum catatan di bawah selesai.",
      "One account says Daendels ordered Surosowan destroyed and the sultan arrested and exiled. The year stays open until the note below is settled.",
      "Aya uraian yén Daendels maréntahkeun Surosowan dirubuhkeun. Taunna acan dikonci.",
    ),
    review: L(
      "파괴 시점은 1680년 네덜란드, 1808년 다엔델스, 1832년 중앙 정부 명령으로 자료가 갈립니다.",
      "Sumber bercabang: 1680 Belanda, 1808 Daendels, atau 1832 perintah pemerintah pusat.",
      "Sources disagree: 1680 under the Dutch, 1808 under Daendels, or 1832 by central-government order.",
      "Sumber béda: 1680, 1808, atawa 1832.",
    ),
    image: publicUrl("museum/palace-ruins.webp"),
    imageAlt: L(
      "낮은 벽돌 기초와 연못이 남은 궁터의 가상 이미지",
      "Gambar virtual pondasi bata rendah dan kolam keraton",
      "Virtual image of low brick foundations and a palace pool",
      "Gambar maya pondasi bata jeung balong",
    ),
    siteId: "surosowan",
  },
  {
    id: "s1813",
    years: "1813",
    title: L("마지막 퇴위", "Turun takhta", "The last deposition", "Turun takhta"),
    exhibit: L("술탄국의 소멸", "Kesultanan berakhir", "The sultanate ends", "Kasultanan réngsé"),
    body: L(
      "래플스가 술탄 샤피우딘을 퇴위시켰습니다. ‘VOC의 압박 끝에 합병’이라고 쓰지 않습니다. 회사는 1799년에 해산되었습니다.",
      "Raffles menurunkan Sultan Syafiuddin. Jangan ditulis ‘dilebur VOC’. Kompeni sudah bubar pada 1799.",
      "Raffles deposed Sultan Syafiuddin. Do not write that the VOC forced a merger. The Company had been dissolved in 1799.",
      "Raffles nurunkeun Sultan Syafiuddin. Ulah ditulis yén VOC nu ngalebur. Kompeni bubar taun 1799.",
    ),
    review: L(
      "영국 총독의 퇴위로 쓸지, 네덜란드령 동인도 병합으로 쓸지 전시 문장은 아직입니다.",
      "Kalimat pameran belum memilih: penurunan takhta oleh Raffles, atau penggabungan ke Hindia Belanda.",
      "The exhibition line is still open: deposition by Raffles, or incorporation into the Dutch East Indies.",
      "Kalimat pameran acan milih.",
    ),
  },
  {
    id: "s2016",
    years: "2016–",
    title: L("이어지는 칭호", "Gelar yang berlanjut", "The title continues", "Gelar nu diteruskeun"),
    exhibit: L("오늘", "Hari ini", "Today", "Poé ieu"),
    body: L(
      "2016년부터 술탄 칭호가 다시 이어지고 있습니다. 살아 있는 사람의 이름은 감수 뒤에 적습니다.",
      "Sejak 2016 gelar sultan dilanjutkan lagi. Nama yang masih hidup ditulis setelah tinjauan.",
      "From 2016 the sultan’s title continues again. The name of a living person is written after review.",
      "Ti 2016 gelar sultan diteruskeun deui. Ngaran anu hirup ditulis sanggeus pariksa.",
    ),
    image: publicUrl("museum/masjid.webp"),
    imageAlt: L(
      "흰 탑과 층층 지붕의 대사원, 가상 이미지",
      "Gambar virtual masjid beratap tumpang dengan menara putih",
      "Virtual image of a tiered mosque and a white tower",
      "Gambar maya masjid",
    ),
    siteId: "masjid",
  },
];

export type Artifact = {
  id: string;
  name: Copy;
  kind: Copy;
  era: Copy;
  place: Copy;
  holder: Copy;
  point: Copy;
  digital: Copy;
  review?: Copy;
  image?: string;
  imageAlt?: Copy;
  sceneId?: string;
  siteId?: string;
};

const holderPending = L(
  "1차 후보. 소장·촬영은 협의 전. 관리 기관은 BPCB Banten으로 적히나 현재 명칭 확인이 필요합니다.",
  "Calon pertama. Penyimpanan dan syuting belum disepakati. Nama lembaga pengelola, yang disebut BPCB Banten, perlu dicek.",
  "A first candidate. Custody and filming are not agreed. The authority, named as BPCB Banten, needs its current title confirmed.",
  "Calon kahiji. Panyimpenan jeung syuting acan sapakat.",
);

export const artifacts: Artifact[] = [
  {
    id: "cannon",
    name: L("메리암 키 아묵", "Meriam Ki Amuk", "Meriam Ki Amuk", "Meriam Ki Amuk"),
    kind: L("무기", "Senjata", "Weapon", "Pakarang"),
    era: L("1529년경이라는 설명이 있음", "Ada uraian sekitar 1529", "Sometimes dated about 1529", "Aya uraian kira 1529"),
    place: L(
      "대사원 경내에 있는 것으로 널리 알려져 있습니다.",
      "Umum dikenal berada di lingkungan Masjid Agung.",
      "Widely known to stand in the Great Mosque grounds.",
      "Ilahar disebut aya di lingkungan Masjid Agung.",
    ),
    holder: holderPending,
    point: L(
      "길이 약 2.5미터의 오스만 양식 청동포. 교역과 화력이 한 물건에 있습니다.",
      "Meriam perunggu bergaya Utsmani, panjang sekitar 2,5 meter. Dagang dan daya tembak ada di satu benda.",
      "An Ottoman-style bronze cannon, about 2.5 meters. Trade and firepower in one object.",
      "Meriam parunggu gaya Utsmani, panjang kira 2,5 méter.",
    ),
    digital: L("3D 스캔 예정", "Rencana pemindaian 3D", "3D scan planned", "Rencana pindai 3D"),
    review: L(
      "제작 연도 1529년은 설명으로만 돕니다. 확정 문장에 넣지 않습니다.",
      "Tahun buat 1529 hanya beredar sebagai keterangan. Jangan masuk kalimat final.",
      "The year 1529 only circulates as an explanation. It does not enter the final sentence.",
      "Taun 1529 ngan katerangan. Ulah asup kana kalimat final.",
    ),
    image: publicUrl("museum/cannon.webp"),
    imageAlt: L(
      "금 상감이 있는 청동 대포의 가상 박물관 사진",
      "Foto virtual meriam perunggu berukir emas",
      "Virtual museum photograph of a bronze cannon with gold inlay",
      "Poto maya meriam parunggu",
    ),
    siteId: "masjid",
  },
  {
    id: "stones",
    name: L("석제 분쇄·압착 도구", "Alat batu tumbuk dan peras", "Stone crushing and pressing tools", "Parabot batu"),
    kind: L("산업 도구", "Alat industri", "Industrial tool", "Parabot industri"),
    era: L("교역 전성기와 연결", "Diikat ke masa jaya dagang", "Tied to the trading peak", "Pakait jeung mangsa jaya"),
    place: L("반튼 라마 출토품 후보", "Calon temuan Banten Lama", "A candidate find from Old Banten", "Calon panemuan Banten Lama"),
    holder: holderPending,
    point: L(
      "후추와 설탕 산업을 보여 줍니다. 같은 돌이 후추 분쇄기인지 사탕수수 압착기인지는 자료가 갈립니다.",
      "Menunjukkan industri lada dan gula. Sumber berbeda: penggiling lada atau pemeras tebu.",
      "It shows the pepper and sugar trades. Sources differ on whether the stone ground pepper or pressed cane.",
      "Némbongkeun industri lada jeung gula. Sumber béda ngeunaan gunana.",
    ),
    digital: L("3D 스캔 예정", "Rencana pemindaian 3D", "3D scan planned", "Rencana pindai 3D"),
    image: publicUrl("museum/stones.webp"),
    imageAlt: L(
      "화산암 분쇄 석기의 가상 박물관 사진",
      "Foto virtual batu tumbuk dari batu gunung api",
      "Virtual museum photograph of volcanic grinding stones",
      "Poto maya batu tumbuk",
    ),
    sceneId: "s1651",
  },
  {
    id: "watu",
    name: L("와투 길랑", "Watu Gilang", "Watu Gilang", "Watu Gilang"),
    kind: L("궁정 석조", "Batu keraton", "Court stone", "Batu keraton"),
    era: L("궁궐 시기. 용도 감수 필요", "Masa keraton. Fungsi perlu tinjauan", "Palace period. Use needs review", "Masa keraton. Gunana kudu dipariksa"),
    place: L("스로소완 일대의 석조물", "Batu di kawasan Surosowan", "A stone in the Surosowan area", "Batu di kawasan Surosowan"),
    holder: holderPending,
    point: L(
      "유적 목록에 들어 있는 평평한 석재입니다. 무엇을 위한 돌인지는 감수 전이라 단정하지 않습니다.",
      "Batu datar yang ada di daftar situs. Fungsinya tidak dipastikan sebelum tinjauan.",
      "A flat stone already on the site list. Its purpose is not asserted before review.",
      "Batu datar dina daptar situs. Gunana acan dipastikeun.",
    ),
    digital: L("3D 스캔과 현장 360°를 연결", "Pemindaian 3D disambung ke 360° lapangan", "3D scan linked to the on-site 360°", "Pindai 3D disambung ka 360°"),
    image: publicUrl("museum/watu.webp"),
    imageAlt: L(
      "벽돌 기초 사이의 평평한 석판, 가상 이미지",
      "Gambar virtual lempeng batu datar di antara pondasi bata",
      "Virtual image of a flat stone slab among brick foundations",
      "Gambar maya lempeng batu",
    ),
    sceneId: "s1552",
    siteId: "surosowan",
  },
  {
    id: "porcelain",
    name: L("외국산 도자기", "Keramik asing", "Foreign ceramics", "Keramik luar"),
    kind: L("도자기", "Keramik", "Ceramics", "Keramik"),
    era: L("교역기 전반", "Sepanjang masa dagang", "Across the trading centuries", "Sapanjang mangsa dagang"),
    place: L("반튼 라마 출토", "Temuan Banten Lama", "Found at Old Banten", "Panemuan Banten Lama"),
    holder: holderPending,
    point: L(
      "중국, 일본, 베트남, 중동, 유럽 제품이 함께 나옵니다. 무역로를 물건으로 보여 줍니다.",
      "Barang Tiongkok, Jepang, Vietnam, Timur Tengah, dan Eropa keluar bersama. Jalur dagang terlihat dari bendanya.",
      "Chinese, Japanese, Vietnamese, Middle Eastern, and European wares come out together. The trade routes show up as things.",
      "Barang Tiongkok, Jepang, Vietnam, Wétan Tengah, jeung Éropa kaluar babarengan.",
    ),
    digital: L("대표품 3D와 무역로 지도", "3D benda wakil dan peta jalur", "3D of representative pieces, plus a trade map", "3D barang wakil jeung peta jalur"),
    image: publicUrl("museum/porcelain.webp"),
    imageAlt: L(
      "여러 산지의 도자기를 모은 가상 정물",
      "Benda mati virtual keramik dari beberapa negeri",
      "Virtual still life of ceramics from several origins",
      "Gambar maya keramik ti sababaraha nagara",
    ),
    sceneId: "s1651",
  },
  {
    id: "coins",
    name: L("화폐", "Mata uang", "Coinage", "Duit"),
    kind: L("화폐", "Mata uang", "Money", "Duit"),
    era: L("교역 통화", "Mata uang niaga", "Trade currency", "Duit dagang"),
    place: L("현지 화폐와 외국 화폐", "Koin lokal dan asing", "Local and foreign coins", "Koin lokal jeung asing"),
    holder: holderPending,
    point: L(
      "이곳에서 어떤 돈이 통했는지 보여 줍니다. 확대가 되는 고해상 사진이 1차 형식입니다.",
      "Menunjukkan uang apa yang berlaku di sini. Bentuk pertama: foto resolusi tinggi yang bisa diperbesar.",
      "Shows which money passed here. The first form is a high-resolution photograph that can be enlarged.",
      "Némbongkeun duit naon nu berlaku di dieu.",
    ),
    digital: L("고해상 사진과 확대", "Foto resolusi tinggi dan perbesaran", "High-resolution photo and zoom", "Poto résolusi luhur"),
    image: publicUrl("museum/coins.webp"),
    imageAlt: L(
      "옛 동전 몇 점의 가상 접사",
      "Makro virtual beberapa koin lama",
      "Virtual macro of several old coins",
      "Makro maya sababaraha koin",
    ),
    sceneId: "s1651",
  },
  {
    id: "fragments",
    name: L("건축 부재", "Bagian bangunan", "Building fragments", "Bagian wangunan"),
    kind: L("고고 유물", "Arkeologi", "Archaeology", "Arkéologi"),
    era: L("사라진 건물의 단서", "Petunjuk bangunan yang hilang", "Clues to lost buildings", "Petunjuk wangunan anu leungit"),
    place: L("지붕 장식, 벽돌, 조각", "Hiasan atap, bata, ukiran", "Roof ornaments, brick, carving", "Hiasan hateup, bata, ukiran"),
    holder: holderPending,
    point: L(
      "없는 건물을 조각으로 읽습니다. 복원 그림은 사료가 있는 범위만, 나머지는 추정으로 표시합니다.",
      "Bangunan yang hilang dibaca dari pecahannya. Gambar pulihan hanya sejauh sumber, selebihnya ditandai perkiraan.",
      "Lost buildings are read from their pieces. Restoration pictures stay inside the sources. The rest is marked conjectural.",
      "Wangunan anu leungit dibaca tina pecahanana.",
    ),
    digital: L("3D와 복원 그림 연결. 이번 목업에는 복원 그림을 넣지 않음", "3D disambung ke gambar pulihan. Purwa rupa ini belum memuat gambar itu", "3D linked to a restoration picture. This pilot does not include that picture", "3D disambung ka gambar pulihan. Purwa rupa ieu acan ngamuat."),
    review: L(
      "아래 벽돌 사진은 카이본 문 인상의 가상 이미지입니다. 특정 부재의 기록 사진이 아닙니다.",
      "Foto bata di bawah adalah kesan virtual gapura Kaibon, bukan dokumentasi sebuah pecahan tertentu.",
      "The brick photograph below is a virtual impression of the Kaibon gate, not a record of a specific fragment.",
      "Poto bata di handap kesan maya gapura Kaibon, lain dokumén pecahan.",
    ),
    image: publicUrl("museum/kaibon.webp"),
    imageAlt: L(
      "벽돌 궁문의 가상 이미지",
      "Gambar virtual gapura bata",
      "Virtual image of a brick palace gate",
      "Gambar maya gapura bata",
    ),
    sceneId: "s1808",
    siteId: "kaibon",
  },
];

export type Site = {
  id: string;
  name: Copy;
  kind: Copy;
  now: Copy;
  point: Copy;
  review?: Copy;
  image?: string;
  imageAlt?: Copy;
  compare?: boolean;
  artifactId?: string;
};

export const sites: Site[] = [
  {
    id: "masjid",
    name: L("반튼 대사원", "Masjid Agung Banten", "Great Mosque of Banten", "Masjid Agung Banten"),
    kind: L("성곽 도시 안에서 남은 건물", "Bangunan yang tersisa di kota bertembok", "The building still standing in the walled city", "Wangunan anu sesa di kota témbok"),
    now: L("신자들이 돌보고, 지금도 예배합니다.", "Dijaga jamaah, dan masih menjadi tempat salat.", "Cared for by the congregation, and still a place of prayer.", "Diurus jamaah, masih tempat solat."),
    point: L("탑, 지붕, 묘역.", "Menara, atap, makam.", "Tower, roof, burial ground.", "Menara, hateup, makam."),
    review: L(
      "건립 연도는 1552, 1556, 1566으로 갈립니다. 연도 없이 보여 줍니다.",
      "Tahun berdiri bercabang: 1552, 1556, atau 1566. Ditampilkan tanpa tahun.",
      "The founding year is given as 1552, 1556, or 1566. It is shown without a year.",
      "Taun ngadeg béda: 1552, 1556, atawa 1566. Dipidangkeun tanpa taun.",
    ),
    image: publicUrl("museum/masjid.webp"),
    imageAlt: L("흰 탑이 있는 대사원의 가상 이미지", "Gambar virtual masjid dengan menara putih", "Virtual image of the mosque and its white tower", "Gambar maya masjid"),
    artifactId: "cannon",
  },
  {
    id: "surosowan",
    name: L("스로소완 궁", "Keraton Surosowan", "Surosowan palace", "Keraton Surosowan"),
    kind: L("1552년 건립으로 기획서에 적힘. 술탄의 거처", "Disebut berdiri 1552 di naskah. Kediaman sultan", "Placed in 1552 by the brief. The sultan’s residence", "Disebut ngadeg 1552 dina naskah"),
    now: L("1–2미터 높이의 벽과 터, 연못.", "Dinding setinggi 1–2 meter, tapak, dan kolam.", "Walls one to two meters high, the footprint, and a pool.", "Témbok jangkung 1–2 méter, tapak, jeung balong."),
    point: L("항공과, 사료가 받치는 복원만 겹칩니다.", "Udara, dan tumpangan pulihan hanya sejauh sumber.", "An aerial, and an overlay only where sources support it.", "Udara, jeung tumpangan ngan sajauh sumber."),
    image: publicUrl("museum/palace-ruins.webp"),
    imageAlt: L("궁터의 가상 이미지", "Gambar virtual tapak keraton", "Virtual image of the palace footprint", "Gambar maya tapak keraton"),
    compare: true,
    artifactId: "watu",
  },
  {
    id: "kaibon",
    name: L("카이본 궁", "Keraton Kaibon", "Kaibon palace", "Keraton Kaibon"),
    kind: L("술탄 샤피우딘의 어머니 라투 아이샤의 거처", "Kediaman Ratu Aisyah, ibu Sultan Syafiuddin", "Home of Ratu Aisyah, mother of Sultan Syafiuddin", "Imah Ratu Aisyah, indung Sultan Syafiuddin"),
    now: L("폐허. 일부 건물이 보입니다.", "Reruntuhan. Sebagian bangunan masih terlihat.", "A ruin. Part of the buildings can still be seen.", "Ruruntuh. Sabagian wangunan masih katingali."),
    point: L("정문과 담.", "Gapura dan tembok.", "The gate and the walls.", "Gapura jeung témbok."),
    image: publicUrl("museum/kaibon.webp"),
    imageAlt: L("벽돌 궁문의 가상 이미지", "Gambar virtual gapura bata", "Virtual image of a brick gate", "Gambar maya gapura"),
    artifactId: "fragments",
  },
  {
    id: "fort",
    name: L("스페일베이크 요새", "Benteng Speelwijk", "Fort Speelwijk", "Benteng Speelwijk"),
    kind: L("네덜란드가 세운 요새", "Benteng yang didirikan Belanda", "A fort built by the Dutch", "Benteng nu didirikeun Walanda"),
    now: L("문화재로 관리됩니다.", "Dikelola sebagai cagar budaya.", "Kept as heritage.", "Diurus salaku cagar budaya."),
    point: L("성벽 위, 항구 쪽을 봅니다.", "Dari atas tembok, menghadap pelabuhan.", "From the wall, looking toward the harbor.", "Ti luhur témbok, nyanghareupan palabuhan."),
    image: publicUrl("museum/fort.webp"),
    imageAlt: L("해안 요새의 가상 이미지", "Gambar virtual benteng pantai", "Virtual image of a coastal fort", "Gambar maya benteng"),
  },
  {
    id: "lake",
    name: L("타시카르디 호수", "Danau Tasikardi", "Lake Tasikardi", "Situ Tasikardi"),
    kind: L("약 5헥타르의 인공 호수", "Danau buatan sekitar 5 hektare", "A made lake of about five hectares", "Situ jieunan kira 5 héktar"),
    now: L("정수 시설의 일부가 남았습니다.", "Sebagian instalasi air masih ada.", "Part of the waterworks remains.", "Sabagian instalasi cai masih aya."),
    point: L("항공과, 정수 시설에 바짝 다가간 샷.", "Udara, dan bidikan dekat instalasi air.", "An aerial, and a close shot of the waterworks.", "Udara, jeung shot deukeut instalasi cai."),
    image: publicUrl("museum/lake.webp"),
    imageAlt: L("인공 호수의 가상 항공 이미지", "Gambar udara virtual danau buatan", "Virtual aerial of a made lake", "Gambar udara maya situ"),
  },
  {
    id: "pecinan",
    name: L("페치난 팅기 사원 터", "Situs kelenteng Pecinan Tinggi", "Pecinan Tinggi temple site", "Situs kelenteng Pecinan Tinggi"),
    kind: L("중국인 거주지의 사원", "Kelenteng di pemukiman Tionghoa", "A temple in the Chinese quarter", "Kelenteng di padumukan Tionghoa"),
    now: L("탑만 남았습니다.", "Hanya menaranya yang tersisa.", "Only the tower remains.", "Ngan menarana nu sesa."),
    point: L("탑 주변.", "Sekitar menara.", "Around the tower.", "Sabudeureun menara."),
    review: L(
      "이 터를 다른 사원 이미지로 대신하지 않습니다.",
      "Tapak ini tidak diisi dengan gambar kelenteng lain.",
      "This site is not filled with a picture of a different temple.",
      "Situs ieu teu dieusi ku gambar kelenteng séjén.",
    ),
  },
  {
    id: "avalokitesvara",
    name: L("아발로키테스바라 사원", "Kelenteng Avalokitesvara", "Avalokitesvara temple", "Kelenteng Avalokitesvara"),
    kind: L("인도네시아에서 가장 오래된 중국 사원 가운데 하나", "Salah satu kelenteng Tionghoa tertua di Indonesia", "One of the oldest Chinese temples in Indonesia", "Salah sahiji kelenteng Tionghoa pangkolotna di Indonésia"),
    now: L("지금도 활동합니다.", "Masih hidup.", "Still active.", "Masih hirup."),
    point: L("여러 공동체가 한 도시에 있었다는 장면.", "Adegan bahwa beberapa komunitas ada di satu kota.", "A scene of several communities in one city.", "Adegan sababaraha komunitas dina hiji kota."),
    image: publicUrl("museum/temple.webp"),
    imageAlt: L("중국 사원 마당의 가상 이미지", "Gambar virtual halaman kelenteng", "Virtual image of a temple courtyard", "Gambar maya halaman kelenteng"),
  },
  {
    id: "site-museum",
    name: L("반튼 라마 유적 박물관", "Museum Situs Kepurbakalaan Banten Lama", "Old Banten archaeological museum", "Musieum Situs Banten Lama"),
    kind: L("출토품을 보관하고 보여 줌", "Menyimpan dan memamerkan temuan", "Keeps and shows the finds", "Nyimpen jeung mamerkeun panemuan"),
    now: L(
      "1985년에 열렸고, 1,000점 이상을 둡니다. 운영 중입니다.",
      "Dibuka 1985, menyimpan lebih dari 1.000 benda. Masih berjalan.",
      "Opened in 1985, with more than a thousand objects. Still open.",
      "Dibuka 1985, nyimpen leuwih ti 1.000 barang.",
    ),
    point: L("실내 360°. 유물 전시관과 연결합니다.", "360° dalam ruang. Disambung ke ruang artefak.", "An interior 360°, linked to the object hall.", "360° di jero. Disambung ka rohangan barang."),
    review: L(
      "우리 박물관의 입구 홀 그림으로 이 실내를 대신하지 않습니다.",
      "Interior ini tidak diganti dengan gambar pendapa museum kami.",
      "This interior is not replaced with a picture of our own entrance hall.",
      "Interior ieu teu diganti ku gambar pendapa urang.",
    ),
  },
];

export const rooms: {
  id: string;
  to?: "/" | "/history" | "/artifacts" | "/sites" | "/plan";
  hash?: string;
  title: Copy;
  text: Copy;
  index: string;
}[] = [
  {
    id: "enter",
    to: "/",
    title: L("입구 홀", "Pendapa", "Entrance hall", "Lawang"),
    text: L("술탄국을 한 장으로. 언어와 동선이 여기서 갈립니다.", "Kesultanan dalam satu lembar. Bahasa dan jalur bercabang di sini.", "The sultanate on one page. Language and route split here.", "Kasultanan dina hiji kaca."),
    index: "01",
  },
  {
    id: "history",
    to: "/history",
    title: L("역사", "Sejarah", "History", "Sajarah"),
    text: L("열한 장면. 오래된 순서.", "Sebelas adegan, dari yang lama.", "Eleven scenes, oldest first.", "Sabelas adegan."),
    index: "02",
  },
  {
    id: "objects",
    to: "/artifacts",
    title: L("유물", "Artefak", "Objects", "Barang"),
    text: L("후보 여섯. 카드의 형식을 통일합니다.", "Enam calon. Bentuk kartu diseragamkan.", "Six candidates. One card format.", "Genep calon."),
    index: "03",
  },
  {
    id: "sites",
    to: "/sites",
    title: L("유적 영상", "Film situs", "Site film", "Pilem situs"),
    text: L("여덟 곳. 핫스팟으로 유물과 연표에 갑니다.", "Delapan tempat. Titik panas menuju artefak dan linimasa.", "Eight places. Hotspots lead to objects and the timeline.", "Dalapan tempat."),
    index: "04",
  },
  {
    id: "court",
    title: L("중정", "Halaman", "Court", "Lataran"),
    text: L(
      "세 관을 잇는 자리입니다. 웹에서는 바로가기가 이 마당입니다.",
      "Penghubung tiga ruang. Di web, pintasan adalah halaman ini.",
      "The link between the three halls. On the web, the shortcut is this court.",
      "Panghubung tilu rohangan.",
    ),
    index: "05",
  },
  {
    id: "back",
    to: "/plan",
    hash: "questions",
    title: L("감수·수장", "Tinjauan", "Review", "Pariksa"),
    text: L(
      "공개하지 않습니다. 문장 확정과 원본 보관.",
      "Tidak dibuka untuk umum. Kalimat final dan simpanan master.",
      "Not public. Final sentences and the master files.",
      "Teu dibuka. Kalimat final jeung master.",
    ),
    index: "06",
  },
];

export type Phase = {
  id: string;
  when: Copy;
  title: Copy;
  body: Copy;
  chart: { start: number; span: number } | null;
};

export const phases: Phase[] = [
  {
    id: "0",
    when: L("5일 · 지금", "5 hari · sekarang", "5 days · now", "5 dinten · ayeuna"),
    title: L("파일럿 목업", "Purwa rupa", "Pilot mockup", "Purwa rupa"),
    body: L(
      "입구와 세 관의 웹, 가상 이미지, 화면 배치, 아직 열린 사실. 촬영도, 잠근 해설도 없습니다.",
      "Web pendapa dan tiga ruang, gambar virtual, denah layar, dan fakta yang masih terbuka. Belum ada syuting, belum ada kalimat terkunci.",
      "The entrance and three halls on the web, virtual images, the screen plan, and the facts still open. No filming, and no locked sentences.",
      "Wéb pendapa jeung tilu rohangan, gambar maya, denah layar. Acan aya syuting.",
    ),
    chart: null,
  },
  {
    id: "1",
    when: L("착수 후 1–2개월", "Bulan 1–2 setelah mulai", "Months 1–2 after start", "Bulan 1–2"),
    title: L("사실·허가", "Fakta dan izin", "Facts and permits", "Fakta jeung idin"),
    body: L(
      "연도, 표기, 촬영 허가, 감수 기관, 운영 주체, 도메인을 정합니다. 이 단계가 끝나기 전에 촬영하지 않고, 해설을 잠그지 않습니다.",
      "Mengunci tahun, ejaan, izin syuting, lembaga tinjauan, pengelola, dan domain. Sebelum selesai, tidak syuting dan tidak mengunci teks.",
      "Settle years, spellings, filming permits, the reviewing body, the operator, and the domain. No filming and no locked text before this ends.",
      "Ngancikeun taun, éjahan, idin, lembaga pariksa, pangurus, jeung domain.",
    ),
    chart: { start: 1, span: 2 },
  },
  {
    id: "2",
    when: L("착수 후 2–5개월", "Bulan 2–5", "Months 2–5", "Bulan 2–5"),
    title: L("현장 수집", "Pengumpulan lapangan", "Field capture", "Ngumpulkeun di lapangan"),
    body: L(
      "여덟 곳의 지상 360°와, 허가가 난 드론. 대표 유물의 3D. 아침 촬영, 우기는 피함. 원본은 소장처와 나눕니다. 8K와 학교용 저용량을 함께 만듭니다.",
      "360° darat di delapan tempat, plus drone yang sudah berizin. 3D benda wakil. Pagi hari, hindari musim hujan. Master dibagi dengan penyimpan. 8K dan versi ringan untuk sekolah.",
      "Ground 360° at eight places, plus a drone where permitted. 3D of the chosen objects. Mornings, outside the rains. Masters shared with the collection. An 8K master and a light file for schools.",
      "360° di dalapan tempat, drone nu geus diidin. 3D barang wakil.",
    ),
    chart: { start: 2, span: 4 },
  },
  {
    id: "3",
    when: L("착수 후 3–7개월", "Bulan 3–7", "Months 3–7", "Bulan 3–7"),
    title: L("해설 네 언어", "Teks empat bahasa", "Four languages", "Opat basa"),
    body: L(
      "이름, 연대, 위치, 소장, 한 줄, 연표 링크. 그다음 음성. 추정은 추정이라고 남깁니다. 온나무의 다국어 영상은 쓸 수 있는 경로로만 적습니다. 순다어는 반튼 화자의 감수를 받습니다.",
      "Nama, tarikh, letak, simpanan, satu kalimat, tautan linimasa. Lalu suara. Perkiraan tetap disebut perkiraan. Video multibahasa Onnamu dicatat sebagai jalur yang bisa dipakai. Bahasa Sunda ditinjau penutur Banten.",
      "Name, date, place, keeper, one sentence, a timeline link. Then voice. Conjecture stays labeled. Onnamu’s multilingual video is noted only as a path we may use. Sundanese is reviewed by a Banten speaker.",
      "Ngaran, tarikh, tempat, panyimpen, hiji kalimat. Sunda dipariksa ku panutur Banten.",
    ),
    chart: { start: 3, span: 5 },
  },
  {
    id: "4",
    when: L("착수 후 4–8개월", "Bulan 4–8", "Months 4–8", "Bulan 4–8"),
    title: L("플랫폼", "Platform", "Platform", "Platform"),
    body: L(
      "설치 없는 웹. 휴대폰을 먼저 설계합니다. glTF 회전, 파노라마 핫스팟, 관리 화면, 자막, 저용량. 통신이 약한 학교 수업을 기준으로 자릅니다.",
      "Web tanpa instalasi. Ponsel didesain lebih dulu. Putar glTF, titik panas panorama, layar kelola, takarir, mode ringan. Dipotong menurut kelas dengan jaringan lemah.",
      "A website, nothing to install. Phones first. glTF rotation, panorama hotspots, an admin screen, captions, a light mode. Cut to the measure of a classroom with a weak connection.",
      "Wéb tanpa instal. Ponsel heula. glTF, hotspot, layar kelola, takarir, mode hampang.",
    ),
    chart: { start: 4, span: 5 },
  },
  {
    id: "5",
    when: L("착수 후 9–10개월 이후", "Bulan 9–10 dan setelahnya", "Months 9–10 and after", "Bulan 9–10"),
    title: L("수업과 공개", "Kelas dan buka", "Classroom, then open", "Kelas jeung buka"),
    body: L(
      "학교 수업 한 번과 해외 소개 한 번으로 시험한 뒤 엽니다. 운영은 1단계에서 정한 주체가 합니다. metadwipa.id는 이 박물관을 대체하지 않는 보조 후보입니다.",
      "Diuji dengan satu kelas sekolah dan satu perkenalan ke luar, lalu dibuka. Pengelola mengikuti keputusan tahap 1. metadwipa.id hanya calon pelengkap, bukan pengganti museum ini.",
      "Tested with one school lesson and one introduction abroad, then opened. The operator is whoever stage 1 names. metadwipa.id is only a possible companion, not a replacement.",
      "Diuji ku hiji kelas jeung hiji perkenalan ka luar. metadwipa.id ngan calon pelengkap.",
    ),
    chart: { start: 9, span: 2 },
  },
];

export const tech: { name: Copy; how: Copy; note: Copy }[] = [
  {
    name: L("접속", "Akses", "Access", "Aksés"),
    how: L("브라우저. 앱 설치 없음", "Peramban. Tanpa instal aplikasi", "A browser. No app to install", "Panyungsi. Tanpa instal"),
    note: L("휴대폰 화면을 먼저 설계", "Layar ponsel didesain lebih dulu", "Design the phone screen first", "Layar ponsel heula"),
  },
  {
    name: L("유물", "Artefak", "Objects", "Barang"),
    how: L("glTF. 끌어 돌리고 확대", "glTF. Seret untuk memutar dan memperbesar", "glTF. Drag to turn and zoom", "glTF. Séréd pikeun muter"),
    note: L("원본은 소장처와 공유", "Master dibagi dengan penyimpan", "Masters shared with the collection", "Master dibagi ka panyimpen"),
  },
  {
    name: L("유적", "Situs", "Sites", "Situs"),
    how: L("파노라마와 핫스팟", "Panorama dan titik panas", "Panorama and hotspots", "Panorama jeung titik panas"),
    note: L("헤드셋은 선택", "Headset bersifat pilihan", "A headset is optional", "Headset pilihan"),
  },
  {
    name: L("역사", "Sejarah", "History", "Sajarah"),
    how: L("연표와 지도, 인물 카드", "Linimasa, peta, kartu tokoh", "Timeline, map, person cards", "Galur waktu, peta, kartu jalma"),
    note: L("17세기와 19세기를 나누어 서술", "Abad ke-17 dan ke-19 ditulis terpisah", "The 17th and 19th centuries are told apart", "Abad ka-17 jeung ka-19 dipisah"),
  },
  {
    name: L("언어", "Bahasa", "Languages", "Basa"),
    how: L("인도네시아어, 순다어, 영어, 한국어", "Indonesia, Sunda, Inggris, Korea", "Indonesian, Sundanese, English, Korean", "Indonesia, Sunda, Inggris, Koréa"),
    note: L("1차 네 언어. 여덟 언어는 그 다음 결정", "Empat bahasa dulu. Delapan bahasa diputuskan kemudian", "Four languages first. Eight is a later decision", "Opat basa heula"),
  },
  {
    name: L("고치기", "Sunting", "Editing", "Édit"),
    how: L("관리 화면에서 문장과 그림", "Kalimat dan gambar dari layar kelola", "Sentences and pictures from an admin screen", "Kalimat jeung gambar ti layar kelola"),
    note: L("감수 뒤에 반영", "Masuk setelah tinjauan", "Published after review", "Asup sanggeus pariksa"),
  },
  {
    name: L("학교", "Sekolah", "Schools", "Sakola"),
    how: L("자막, 음성, 저용량", "Takarir, suara, mode ringan", "Captions, voice, a light mode", "Takarir, sora, mode hampang"),
    note: L("통신이 약한 교실을 기준으로", "Diukur dari kelas dengan jaringan lemah", "Measured by a classroom with a weak link", "Diukur ti kelas jaringan lemah"),
  },
];

export const questions: { id: string; title: Copy; body: Copy }[] = [
  {
    id: "end",
    title: L("1813년의 문장", "Kalimat 1813", "The 1813 sentence", "Kalimat 1813"),
    body: L(
      "VOC의 압박 끝에 합병이라고 쓰지 않습니다. 회사는 1799년에 끝났습니다. 래플스의 퇴위와, 네덜란드령 동인도 병합 중 전시 문장을 고릅니다.",
      "Jangan ditulis lebur karena tekanan VOC. Kompeni berakhir 1799. Pilih: penurunan takhta oleh Raffles, atau penggabungan ke Hindia Belanda.",
      "Do not write a merger under VOC pressure. The Company ended in 1799. Choose the exhibition line: deposition by Raffles, or incorporation into the Dutch East Indies.",
      "Ulah ditulis lebur ku VOC. Kompeni réngsé 1799.",
    ),
  },
  {
    id: "founding",
    title: L("건국 연도", "Tahun berdiri", "The founding year", "Taun ngadeg"),
    body: L(
      "1526 정복, 1527 점령, 1552 독립. 무엇을 건국으로 표기할지.",
      "1526 taklukan, 1527 pendudukan, 1552 merdeka. Mana yang ditulis sebagai berdiri.",
      "1526 conquest, 1527 occupation, 1552 independence. Which one is labeled the founding.",
      "1526, 1527, atawa 1552. Nu mana nu disebut ngadeg.",
    ),
  },
  {
    id: "mosque",
    title: L("대사원 건립", "Berdiri masjid", "The mosque year", "Taun masjid"),
    body: L(
      "1552, 1556, 1566. 정해지기 전에는 연도를 비웁니다.",
      "1552, 1556, 1566. Sebelum dipilih, tahun dikosongkan.",
      "1552, 1556, or 1566. Until one is chosen, the year stays blank.",
      "1552, 1556, 1566. Saméméh dipilih, taun dikosongkeun.",
    ),
  },
  {
    id: "palace",
    title: L("궁 파괴 시점", "Runtuhnya keraton", "When the palaces fell", "Waktu keraton rubuh"),
    body: L(
      "1680 네덜란드, 1808 다엔델스, 1832 중앙 정부. 스로소완과 카이본을 한 해에 묶지 않을 수도 있습니다.",
      "1680 Belanda, 1808 Daendels, 1832 pemerintah pusat. Surosowan dan Kaibon mungkin tidak satu tahun.",
      "1680 Dutch, 1808 Daendels, 1832 central government. Surosowan and Kaibon may not share one year.",
      "1680, 1808, 1832. Dua keraton bisa béda taun.",
    ),
  },
  {
    id: "ageng",
    title: L("아겡의 표기", "Ejaan Ageng", "Spelling Ageng", "Éjahan Ageng"),
    body: L(
      "국가 영웅 공식은 Ageng입니다. Agung이 사료에 맞다는 연구도 있습니다. 전시에 어느 쪽을 쓸지.",
      "Ejaan pahlawan nasional adalah Ageng. Ada penelitian yang membela Agung menurut sumber. Pilih untuk pameran.",
      "The national-hero spelling is Ageng. Some research argues the sources say Agung. Choose one for the exhibition.",
      "Éjahan pahlawan nasional Ageng. Aya nu membela Agung.",
    ),
  },
  {
    id: "permit",
    title: L("소장처 협의", "Izin penyimpan", "The collection", "Idin panyimpen"),
    body: L(
      "촬영, 3D, 이미지 사용 허가가 필요합니다. 관리 기관의 현재 이름을 확인합니다.",
      "Perlu izin syuting, 3D, dan pemakaian gambar. Nama lembaga pengelola yang sekarang harus dicek.",
      "Filming, 3D, and image use need permission. Confirm the authority’s current name.",
      "Perlu idin syuting, 3D, jeung gambar. Ngaran lembaga kudu dicek.",
    ),
  },
  {
    id: "reviewer",
    title: L("감수 기관", "Lembaga tinjauan", "Who reviews", "Lembaga pariksa"),
    body: L(
      "현지 대학과 역사학자. 후보로 UIN Sultan Maulana Hasanuddin Banten이 적혀 있습니다. 임명 전입니다.",
      "Perguruan tinggi dan sejarawan setempat. UIN Sultan Maulana Hasanuddin Banten tercatat sebagai calon. Belum ditunjuk.",
      "A local university and historians. UIN Sultan Maulana Hasanuddin Banten is named as a candidate. Not appointed.",
      "UIN Sultan Maulana Hasanuddin Banten kacatet salaku calon. Acan ditunjuk.",
    ),
  },
  {
    id: "money",
    title: L("재원과 운영", "Dana dan pengelola", "Money and operator", "Dana jeung pangurus"),
    body: L(
      "예산, 발주, 운영 주체, 도메인, 온나무·KIIP·ITB의 협력 범위. 착수일이 없어 일정은 착수 후 개월로만 적습니다.",
      "Anggaran, pemesan, pengelola, domain, dan batas kerja sama Onnamu, KIIP, ITB. Belum ada hari mulai, jadi jadwal hanya dalam bulan setelah mulai.",
      "Budget, client, operator, domain, and how far Onnamu, KIIP, and ITB take part. There is no start date, so the schedule is counted in months after a start.",
      "Anggaran, nu mesen, pangurus, domain. Acan aya poé mimiti.",
    ),
  },
  {
    id: "langs",
    title: L("언어의 범위", "Lingkup bahasa", "How many languages", "Lingkup basa"),
    body: L(
      "1차는 인도네시아어, 순다어, 영어, 한국어. 여덟 언어로 늘릴지, 언제 늘릴지는 나중 결정입니다.",
      "Tahap pertama: Indonesia, Sunda, Inggris, Korea. Perluasan ke delapan bahasa, dan kapan, diputuskan nanti.",
      "First release: Indonesian, Sundanese, English, Korean. Whether and when to grow to eight languages is a later decision.",
      "Tahap kahiji: Indonesia, Sunda, Inggris, Koréa.",
    ),
  },
];

export const parties: { name: string; role: Copy }[] = [
  {
    name: "온나무",
    role: L(
      "다국어 영상은 쓸 수 있는 경로로 적습니다. 협력 범위는 미정입니다.",
      "Video multibahasa dicatat sebagai jalur yang bisa dipakai. Batas kerja sama belum tetap.",
      "Multilingual video is noted as a path we may use. The scope of work is not fixed.",
      "Vidéo multibasa dicatet salaku jalur. Wates gawé acan tetep.",
    ),
  },
  {
    name: "브라이튼",
    role: L("기획 관계. 역할은 협의 전입니다.", "Pihak naskah. Peran belum disepakati.", "A party to the brief. The role is not agreed.", "Pihak naskah. Peran acan sapakat."),
  },
  {
    name: "두드림인재개발원",
    role: L("기획 관계. 역할은 협의 전입니다.", "Pihak naskah. Peran belum disepakati.", "A party to the brief. The role is not agreed.", "Pihak naskah. Peran acan sapakat."),
  },
  {
    name: "K헤리티지포럼",
    role: L("기획 자문의 관계입니다.", "Pihak nasihat naskah.", "Advisory party to the brief.", "Pihak naséhat naskah."),
  },
  {
    name: "Yayasan Sabumi Nusantara Jaya",
    role: L(
      "제안 측입니다. 웹은 bamboochain.id. 협약 문서는 체결된 것으로 적지 않습니다.",
      "Pihak pengusul. Situs: bamboochain.id. Dokumen kerja sama tidak dicatat sebagai sudah ditandatangani.",
      "The proposing party. Site: bamboochain.id. No agreement is recorded here as signed.",
      "Pihak nu ngusulkeun. Situs: bamboochain.id. Dokumén gawé bareng teu dicatet geus ditandatanganan.",
    ),
  },
  {
    name: "KIIP",
    role: L(
      "행사와 이어진 회의에서 제안이 다루어진 자리입니다.",
      "Usulan dibahas pada acara dan rapat yang menyusul.",
      "The proposal was discussed at the event and the meeting that followed.",
      "Usulan dibahas dina acara jeung rapat saanggeusna.",
    ),
  },
  {
    name: "metadwipa.id",
    role: L(
      "별도 데모입니다. 이 박물관의 원본 보관소로 쓰지 않고, 덧붙일 보조 후보로만 둡니다.",
      "Demo terpisah. Tidak dipakai sebagai penyimpan master museum ini, hanya calon pelengkap.",
      "A separate demo. Not the master archive of this museum. Only a possible companion.",
      "Démo misah. Lain panyimpen master musieum ieu.",
    ),
  },
];

export const sources: { href: string; name: string; note: Copy }[] = [
  {
    href: "https://en.wikipedia.org/wiki/Banten_Sultanate",
    name: "Banten Sultanate",
    note: L("연표의 기준. 원문을 열람함.", "Acuan linimasa. Naskah asli dibaca.", "Baseline for the timeline. The article was read.", "Acuan galur waktu."),
  },
  {
    href: "https://en.wikipedia.org/wiki/Old_Banten",
    name: "Old Banten",
    note: L("유적 여덟 곳의 뼈대. 원문을 열람함.", "Kerangka delapan situs. Naskah asli dibaca.", "The frame for the eight sites. The article was read.", "Rangka dalapan situs."),
  },
  {
    href: "https://www.indonesia.travel/id-id/destination/java/banten/museum-situs-kepurbakalaan-banten-lama/",
    name: "Museum Situs Kepurbakalaan Banten Lama",
    note: L("관광부 소개. 1985년, 1,000점 이상, 도자기의 산지.", "Laman kementerian pariwisata.", "Tourism ministry page.", "Kaca kementerian."),
  },
  {
    href: "https://www.kompas.id/baca/english/2022/08/20/the-blood-of-resistance",
    name: "The Blood of Resistance",
    note: L("1970년 국가 영웅. Ageng 표기 논의.", "Pahlawan 1970 dan ejaan Ageng.", "The 1970 hero decree and the Ageng spelling.", "Pahlawan 1970."),
  },
  {
    href: "https://www.goodnewsfromindonesia.id/indonesiana/wisata/keraton-surosowan-bekas-pusat-kesultanan-banten-di-kawasan-banten-lama",
    name: "Keraton Surosowan",
    note: L("검색 요약만 확인. 전시 전에 원문을 다시 읽음.", "Baru ringkasan hasil cari. Baca ulang sebelum pameran.", "Only a search summary was checked. Read again before the exhibition.", "Ngan ringkesan."),
  },
  {
    href: "https://www.goodnewsfromindonesia.id/2026/06/17/keraton-kaibon-menengok-kembali-sisa-kejayaan-kesultanan-banten",
    name: "Keraton Kaibon",
    note: L("검색 요약만 확인.", "Baru ringkasan.", "Search summary only.", "Ngan ringkesan."),
  },
  {
    href: "https://mamikos.com/info/rangkuman-sejarah-kerajaan-banten-pljr/?halaman=4",
    name: "Sejarah Kerajaan Banten",
    note: L("검색 요약만 확인.", "Baru ringkasan.", "Search summary only.", "Ngan ringkesan."),
  },
  {
    href: "https://daihatsu.co.id/en/tips-and-event/tips-sahabat/detail-content/menguak-sejarah-kejayaan-kerajaan-banten-dan-peninggalannya",
    name: "Kerajaan Banten dan peninggalannya",
    note: L("검색 요약만 확인.", "Baru ringkasan.", "Search summary only.", "Ngan ringkesan."),
  },
];

export const filmstrip: {
  href: "/artifacts" | "/sites";
  hash: string;
  image: string;
  alt: Copy;
  caption: Copy;
}[] = [
  {
    href: "/artifacts",
    hash: "cannon",
    image: publicUrl("museum/cannon.webp"),
    alt: artifacts[0].imageAlt!,
    caption: artifacts[0].name,
  },
  {
    href: "/artifacts",
    hash: "porcelain",
    image: publicUrl("museum/porcelain.webp"),
    alt: artifacts[3].imageAlt!,
    caption: artifacts[3].name,
  },
  {
    href: "/sites",
    hash: "masjid",
    image: publicUrl("museum/masjid.webp"),
    alt: sites[0].imageAlt!,
    caption: sites[0].name,
  },
];
