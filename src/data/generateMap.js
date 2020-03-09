import ECharts from '../components/ECharts.vue'
// import buildLineConfig from './config_line'
import mapConfig from './mapConfig'
// import chinaMap from '../data/china.json'
import worldMap from 'echarts/map/json/world.json'
import data from './data.json'
import { getName } from './name'

export default function genMap (country) {
  const mapData = {
    updateTime: data.lastUpdateTime,
    total: null,
    today: null,
    map: null// ,
    // table: null,
    // isProvince: false,
    // chinaDayList: null
  }

  const countries = data.areaTree
  // const provinces = area.areaTree[0].children
  // const provincePinyin = getPinyinByName(province)
  const result = []
  
  ECharts.registerMap('world', worldMap)
  countries.forEach(p => {
      result.push({
          name: getName(p.name),
          value: p.total.confirm
      })
    })
    

    // mapData.total = area.chinaTotal
    // mapData.today = area.chinaAdd
    // mapData.table = area.areaTree[0].children
    mapData.map = mapConfig(country, result)

    console.log(mapConfig(country, result))
  return mapData
}
