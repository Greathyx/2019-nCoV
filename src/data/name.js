// 腾讯新闻抓取到的国家名称是中文，echarts 绑定数据时需要对应的英文
// fusionChart 地图数据需要使用ID和对应缩写

import pinyin from 'pinyin'

const countryName = ['Thailand', 'Korea', 'Japan', 'Singapore', 'United States', 'Australia', 'Germany',
    'Malaysia', 'Vietnam', 'France', 'United Arab Emirates', 'Canada', 'India', 'Philippines', 'Russia',
    'Italy', 'United Kingdom', 'Nigeria', 'Sri Lanka', 'Finland', 'Sweden', 'Cambodia', 'Belgium', 'China',
    'Iran', 'Kuwait', 'Bahrain', 'Spain', 'Israel', 'Iraq', 'Norway', 'Switzerland', 'Oman', 'Lebanon',
    'Austria', 'Greece', 'Croatia', 'Denmark', 'Brazil', 'North Macedonia', 'Algeria', 'Netherlands',
    'Afghanistan', 'Nepal', 'Estonia', 'Romania', 'Georgia'];

const countryHanzi = ['泰国', '韩国', '日本本土', '新加坡', '美国', '澳大利亚', '德国', '马来西亚', '越南', '法国',
    '阿联酋', '加拿大', '印度', '菲律宾', '俄罗斯', '意大利', '英国', '尼日利亚', '斯里兰卡', '芬兰', '瑞典', '柬埔寨',
    '比利时', '中国', '伊朗', '科威特', '巴林', '西班牙', '以色列', '伊拉克', '挪威', '瑞士', '阿曼', '黎巴嫩', '奥地利',
    '希腊', '克罗地亚', '丹麦', '巴西', '北马其顿', '阿尔及利亚', '荷兰', '阿富汗', '尼泊尔', '爱沙尼亚', '罗马尼亚',
    '格鲁吉亚'];

const countryId = ['122', '110', '107', '119', '23', '175', '142', '113', '125', '141',
    '200', '05', '104', '117', '118', '147', '170', '73', '120', '140',
    '167', '100', '133', '101', '106', '194', '190', '166', '192', '191',
    '158', '168', '196', '195', '131', '143', '136', '138', '27', '152',
    '39', '157', '93', '115', '139', '161', '103'];

const countryAbbr = ['TH', 'KR', 'JP', 'SG', 'US', 'AU', 'DE', 'MY', 'VN', 'FR',
    'AE', 'CA', 'IN', 'PH', 'RU', 'IT', 'UK', 'NG', 'LK', 'FI',
    'SE', 'KH', 'BE', 'CN', 'IA', 'KU', 'BA', 'ES', 'IE', 'IZ',
    'NO', 'CH', 'OM', 'LB', 'AT', 'GR', 'HY', 'DK', 'BR', 'MK',
    'DZ', 'NL', 'AF', 'NP', 'EE', 'RO', 'GE'];


function getHanzi(name) {
    let index = countryName.indexOf(name);
    if (index > -1) {
        return countryHanzi[index]
    } else {
        return null
    }
}

function getName(hanzi) {
    let index = countryHanzi.indexOf(hanzi);
    if (index > -1) {
        return countryName[index]
    } else {
        return null
    }
}

function getPinyin(place) {
    let temp = pinyin(place, {style: pinyin.STYLE_NORMAL});
    return temp.join('')
}

function getId(hanzi) {
    let index = countryHanzi.indexOf(hanzi);
    if (index > -1) {
        return countryId[index]
    } else {
        return null
    }
}

function getAbbr(hanzi) {
    let index = countryHanzi.indexOf(hanzi);
    if (index > -1) {
        return countryAbbr[index]
    } else {
        return null
    }
}

export {
    getHanzi,
    getName,
    getPinyin,
    getId,
    getAbbr
}
