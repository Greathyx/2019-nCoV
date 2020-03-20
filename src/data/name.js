// 将国家编码转换为国家英文名
// 参考: https://raw.githubusercontent.com/canghailan/Wuhan-2019-nCoV/master/CountryCode.csv

/*
const CODE=['CN','JP','KR','IN', 'GB', 'IT', 'FR', 'DE', 'CA', 'US', 'ES', 'SE', 'SG', 'NL', 'IR', 'DK', 'FI', 'NO', 'IS', 'CH', 'BE']
const NAME=['China','Japan','Korea','India', 'the U.K.', 'Italy', 'France', 'Germany', 'Canada', 'the U.S.A.', 'Spain', 'Sweden', 'Singapore', 'Netherlands', 'Iran', 'Denmark', 'Finland', 'Norway', 'Iceland', 'Switzerland', 'Belgium']
*/

import pinyin from 'pinyin'
const CODE = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW']
const NAME = ['Afghanistan', 'Aland Islands', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire, Sint Eustatius and Saba', 'Bosnia and Herz.', 'Botswana', 'Bouvet Island', 'Brazil', 'British Indian Ocean Territory', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Rep.', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo', 'Dem. Rep. Congo', 'Cook Islands', 'Costa Rica', "Côte d'Ivoire", 'Croatia', 'Cuba', 'Cura莽ao', 'Cyprus', 'Czech Rep.', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Rep.', 'Ecuador', 'Egypt', 'El Salvador', 'Eq. Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands (Malvinas)', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Territories', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Island and McDonald Islands', 'Holy See', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Dem. Rep. Korea", 'Korea', 'Kuwait', 'Kyrgyzstan', "Lao PDR", 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macao', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R茅union', 'Romania', 'Russia', 'Rwanda', 'Saint Barthelemy', 'Saint Helena, Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten (Dutch part)', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia and the South Sandwich Islands', 'S. Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan, Province of China', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Virgin Islands, British', 'Virgin Islands, U.S.', 'Wallis and Futuna', 'W. Sahara', 'Yemen', 'Zambia', 'Zimbabwe']


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

function getName2(hanzi) {
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


function getName(code) {

    let index = CODE.indexOf(code)
    if (index > -1) {
        return NAME[index]
    } else {
        return null
    }
}

function getCode(name){
    let index = NAME.indexOf(name)
    if(index>-1){
        return CODE[index]
    }else{
        return null
    }
}

export {
    CODE,
    getName,
    getHanzi,
    getName2,
    getPinyin,
    getId,
    getAbbr,
    getCode
}
