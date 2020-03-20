// 生成折线图，使用今日头条数据
import data from './data.json'
import chartConfig from './chartConfig.js'
import chartConfigLog from './chartConfig_log.js'
import {getCode} from './name'

export default function genChart(places, type) {
    const chart = {
        chart: null
    };

    const res = [];

    // places 是传进来的国家全名数组
    for(var place of places){
      var code = getCode(place)
      var tres=[]
      let tempdata=data.filter(e=>e.countryCode===code&&!e.province)
      if(tempdata.length===0){
          continue
      }
      tempdata.forEach(p=>{
          tres.push({
              value: p.confirmed
          })
      })
      tres=tres.slice(-30) // 取最近 30 天
      // 不足 30 天则前面用 0 补齐
      if(tres.length<30){
          tres=Array(30-tres.length).fill(0).concat(tres)
      }
      res.push(tres)
    }

    const xAxis = [];
    let tempdata = data.filter(e => e.countryCode === 'CN' && !e.province);
    tempdata.forEach(p => {
        xAxis.push(p.date)
    });
    
    if(type=='log'){
        chart.chart = chartConfigLog(xAxis.slice(-30), places, res)
    }else{
        chart.chart=chartConfig(xAxis.slice(-30), places, res)
    }

    return chart.chart
}