/* =====================================================================
   小小動物醫院 — 介面字串翻譯檔

   zh：中文原文，tw 空白時的 fallback
   tw：台文漢字（教育部推薦用字）
   lo：台羅

   {n} 會在遊戲中替換成數字，翻譯時請保留。
   ===================================================================== */

const STRINGS = {
  title:        { zh: '小小動物醫院', tw: '小小動物病院', lo: 'Sió-sió Tōng-bu̍t Pēnn-īnn' },
  hearts:       { zh: '愛心', tw: '愛心', lo: 'ài-sim' },
  waiting:      { zh: '候診區', tw: '候診區', lo: 'hāu-tsín-khu' },
  bed:          { zh: '病床 {n}', tw: '病床 {n}', lo: 'pēnn-tshn̂g {n}' },
  tools:        { zh: '治療工具', tw: '治療家私', lo: 'tī-liâu ke-si' },
  soundOn:      { zh: '開啟音效', tw: '開聲音', lo: 'khui siann-im' },
  soundOff:     { zh: '關閉音效', tw: '聲音禁掉', lo: 'siann-im kìm-tiāu' },
  language:     { zh: '切換語言', tw: '換語言', lo: 'uānn gí-giân' },
  fever:        { zh: '發燒', tw: '發燒', lo: 'huat-sio' },
  tummy:        { zh: '肚子痛', tw: '腹肚疼', lo: 'pak-tóo thiànn' },
  scrape:       { zh: '擦傷', tw: '遛皮', lo: 'liù-phuê' },
  cold:         { zh: '感冒', tw: '感冒', lo: 'kám-mōo' },
  tooth:        { zh: '蛀牙', tw: '蛀齒', lo: 'tsiù-khí' },
  icepack:      { zh: '冰枕', tw: '冰枕', lo: 'ping-tsím' },
  medicine:     { zh: '藥水', tw: '藥水', lo: 'io̍h-tsuí' },
  bandage:      { zh: 'OK 繃', tw: 'OK póng', lo: 'OK póng' },
  tissue:       { zh: '面紙', tw: '棉仔紙', lo: 'mî-á-tsuá' },
  toothbrush:   { zh: '牙刷', tw: '齒抿仔', lo: 'khí-bín-á' },
  loose:        { zh: '螺絲鬆了', tw: '螺絲鬆去', lo: 'lôo-si sang--khì' },
  squeak:       { zh: '卡卡的', tw: '㧎㧎', lo: 'khê-khê' },
  lowbatt:      { zh: '沒電了', tw: '無電矣', lo: 'bô tiān--ah' },
  screwdriver:  { zh: '螺絲起子', tw: 'loo-lái-bah', lo: 'loo-lái-bah' },
  wrench:       { zh: '扳手', tw: '扳仔', lo: 'pán-á' },
  charger:      { zh: '充電線', tw: '充電線', lo: 'tshiong-tiān-suànn' },
  bottom:       { zh: '屁股痛', tw: '尻川疼', lo: 'kha-tshng thiànn' },
  cushion:      { zh: '甜甜圈坐墊', tw: '甜箍麭椅苴仔', lo: 'tinn-khoo-pháng í-tsū-á' },
  unlocked:     { zh: '新朋友來了！', tw: '新朋友來矣！', lo: 'Sin pîng-iú lâi--ah!' },
  petPatient:   { zh: '小動物病人', tw: '動物患者', lo: 'tōng-bu̍t huān-tsiá' },
  comfort:      { zh: '拍拍安撫', tw: '搭搭惜惜', lo: 'tah-tah sioh-sioh' },
  roster:       { zh: '患者名冊', tw: '患者名冊', lo: 'huān-tsiá miâ-tsheh' },
  rosterClose:  { zh: '關閉名冊', tw: '關名冊', lo: 'kuainn miâ-tsheh' },
  mystery:      { zh: '？？？', tw: '', lo: '' },
  /* 患者名冊的動物名（台文與台羅經母語者校訂） */
  dog:          { zh: '狗狗', tw: '狗仔', lo: 'káu-á' },
  cat:          { zh: '貓咪', tw: '貓仔', lo: 'niau-á' },
  rabbit:       { zh: '兔子', tw: '兔仔', lo: 'thòo-á' },
  sheep:        { zh: '綿羊', tw: '綿羊', lo: 'mî-iûnn' },
  monkey:       { zh: '猴子', tw: '猴山仔', lo: 'kâu-san-á' },
  bird:         { zh: '小鳥', tw: '鳥仔', lo: 'tsiáu-á' },
  raccoon:      { zh: '浣熊', tw: '浣熊', lo: 'uán-hîm' },
  elephant:     { zh: '大象', tw: '象', lo: 'tshiūnn' },
  giraffe:      { zh: '長頸鹿', tw: '麒麟鹿', lo: 'kî-lîn-lo̍k' },
  rhino:        { zh: '犀牛', tw: '犀牛', lo: 'sai-gû' },
  lion:         { zh: '獅子', tw: '獅', lo: 'sai' },
  tiger:        { zh: '老虎', tw: '虎', lo: 'hóo' },
  dinosaur:     { zh: '恐龍', tw: '恐龍', lo: 'khióng-liông' },
  unicorn:      { zh: '獨角獸', tw: '獨角獸', lo: 'to̍k-kak-siù' },
  robot:        { zh: '機器人', tw: '機器人', lo: 'ki-khì-lâng' },
};
