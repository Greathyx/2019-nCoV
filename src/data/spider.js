//从腾讯新闻抓取数据（JSON 格式）
//需要搭配定时运行脚本来更新数据
const axios=require('axios')
const fs=require('fs')

const request=axios.create({
    baseURL: 'https://view.inews.qq.com/g2'
})

function getData(){
    request.get('/getOnsInfo?name=disease_h5')
        .then(res => {
            let rawData = JSON.parse(res.data.data)
            fs.writeFileSync('data.json', JSON.stringify(rawData))
        })
}

getData()