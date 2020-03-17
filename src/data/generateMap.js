// 撤掉腾讯数据源，换用今日头条数据
import ECharts from '../components/ECharts.vue'
// import buildLineConfig from './config_line'
import mapConfig from './mapConfig'
// import chinaMap from '../data/china.json'
import worldMap from 'echarts/map/json/world.json'
import data from './overall.json'
import { getName, CODE } from './name'

export default function genMap (country) {
  const mapData = {
    updateTime: data.lastUpdateTime,
    map: null
  }

  const result = []

  // generate date of today
  const today= new Date()
  const dd=String(today.getDate()).padStart(2, '0')
  const mm=String(today.getMonth()+1).padStart(2,'0') // Jan is 0
  const yyyy=today.getFullYear()
  const todaydate=yyyy+'-'+mm+'-'+dd
  
  ECharts.registerMap('world', worldMap)
  // 把 NaN 变成 0
  // 先用 0 把所有地区填满
  for(var code of CODE){
    result.push({
      name: getName(code),
      value: 0
    })
  }

  for(var ccode of CODE){
      var temp=data.filter(e=>e.countryCode==ccode&&!e.province&&e.date==todaydate)
      if(temp.length==0){
        continue
      }
      result.push({
          name: getName(ccode),
          value:temp[0].confirmed
      })
  }

  //console.log(result)

    mapData.map = mapConfig(country, result)
  return mapData
}
