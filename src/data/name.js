// 腾讯新闻抓取到的国家名称是中文，echarts 绑定数据时需要对应的英文

import pinyin from 'pinyin'

const countryName = ['Thailand', 'Korea', 'Japan', 'Singapore', 'United States', 'Australia', 'Germany', 'Malaysia', 'Vietnam', 'France', 'United Arab Emirates', 'Canada', 'India', 'Philippines', 'Russia', 'Italy', 'United Kingdom', 'Nigeria', 'Sri Lanka', 'Finland', 'Sweden', 'Cambodia', 'Belgium']
const countryHanzi = ['泰国', '韩国', '日本', '新加坡', '美国', '澳大利亚', '德国', '马来西亚', '越南', '法国', '阿联酋', '加拿大', '印度', '菲律宾', '俄罗斯', '意大利', '英国', '尼日利亚', '斯里兰卡', '芬兰', '瑞典', '柬埔寨', '比利时']

function getHanzi (name) {
  let index = countryName.indexOf(name)
  if (index > -1) {
    return countryHanzi[index]
  } else {
    return null
  }
}

function getName (hanzi) {
  let index = countryHanzi.indexOf(hanzi)
  if (index > -1) {
    return countryName[index]
  } else {
    return null
  }
}

function getPinyin (place) {
  let temp = pinyin(place, { style: pinyin.STYLE_NORMAL })
  return temp.join('')
}

export {
  getHanzi,
  getName,
  getPinyin
}
