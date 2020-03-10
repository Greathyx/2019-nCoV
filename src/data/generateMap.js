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
    map: null// ,
    // table: null,
    // isProvince: false,
    // chinaDayList: null
  }

  const result = []
  
  // date 写死了有点麻烦啊……
  ECharts.registerMap('world', worldMap)
  for(var ccode of CODE){
      var temp=data.filter(e=>e.countryCode==ccode&&!e.province&&e.date=='2020-03-09')
      if(temp.length==0){
          continue
      }
      result.push({
          name: getName(ccode),
          value:temp[0].confirmed
      })
  }

    // mapData.total = area.chinaTotal
    // mapData.today = area.chinaAdd
    // mapData.table = area.areaTree[0].children
    mapData.map = mapConfig(country, result)
  return mapData
}
