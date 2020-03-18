/**
 * 从头条新闻抓取数据（JSON 格式）
 */
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const fs = require('fs');

// export default function crawlData() {
let xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET",
    "https://raw.githubusercontent.com/canghailan/Wuhan-2019-nCoV/master/Wuhan-2019-nCoV.json",
    false); // false for synchronous request
xmlHttp.send(null);
let rawData = JSON.parse(xmlHttp.responseText);
fs.writeFileSync('data.json', JSON.stringify(rawData));

// // generate date of today
// const today = new Date();
// const dd = String(today.getDate()).padStart(2, '0');
// const mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan is 0
// const yyyy = today.getFullYear();
// const today_date = yyyy + '-' + mm + '-' + dd;
//
// const updatedData = {
//     "updatedData": today_date
// };
// fs.writeFileSync('updatedDate.json', JSON.stringify(updatedData));
// }


//从腾讯新闻抓取数据（JSON 格式）
//需要搭配定时运行脚本来更新数据
// const axios = require('axios');

// const request = axios.create({
//     baseURL: 'https://view.inews.qq.com/g2'
//     // baseURL: 'https://raw.githubusercontent.com/canghailan'
// });
//
// function getData() {
//     request.get('/getOnsInfo?name=disease_h5')
//     // request.get('/Wuhan-2019-nCoV/master/Wuhan-2019-nCoV.json')
//         .then(res => {
//             console.log(res);
//             let rawData = JSON.parse(res.data.data);
//             fs.writeFileSync('data.json', JSON.stringify(rawData))
//         })
// }
//
// getData();