//处理抓取到的 data.json
const fs=require('fs')
const rawdata=fs.readFileSync('data.json')
const data=JSON.parse(rawdata)

//data.areaTree[0] 是中国
const countries=data.areaTree
const provinces=data.areaTree[0].children
//数据好像要和地图绑定写，睡醒再看