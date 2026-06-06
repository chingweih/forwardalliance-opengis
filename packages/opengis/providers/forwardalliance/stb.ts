import { csv } from '../base/csv'

export const stb = csv(
  {
    id: 'STB',
    // 壯闊台灣公開資料｜《後盾計畫》止血箱設置一覽表
    url: 'https://docs.google.com/spreadsheets/d/1tj80KyNBf_x99s-fEmRPun8mrnH_p8lQYtnuU5lCaTM/export?format=csv&gid=0',
    columnMap: {
      name: '安裝單位',
      description: '架設區域',
      address: '安裝地址',
    },
    idColumn: '序號',
  },
  {
    x: '經度',
    y: '緯度',
  },
)
