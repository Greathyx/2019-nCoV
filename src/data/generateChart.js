// 生成折线图，使用今日头条数据
import data from './data.json'
import chartConfig from './chartConfig.js'
import {getName} from './name'

export default function genChart(place) {
    const chart = {
        chart: null
    };

    const res = [];
    const cCodes = [];
    const cNames = [];
    //可能要考虑 padding

    if (place === 'Asia') {
        // 日本 韩国 印度 伊朗
        cCodes.push('JP', 'KR', 'IN', 'IR')
    } else if (place === 'Europe') {
        // 意大利 法国 德国 西班牙
        cCodes.push('IT', 'FR', 'DE', 'ES', 'CH', 'NL', 'GB', 'BE')
    } else if (place === 'America') {
        // 美国
        cCodes.push('US', 'CA')
    } else if (place === 'China') {
        cCodes.push('CN')
    } else if (place === 'Norden') {
        cCodes.push('SE', 'DK', 'FI', 'NO', 'IS')
    } else {
        cCodes.push('')
    }

    for (const cCode of cCodes) {
        genCountryData(cCode)
    }

    // 将给定国家的确诊数据压入 res
    function genCountryData(cCode) {
        var tres = [];
        let tempdata = data.filter(e => e.countryCode === cCode && !e.province);
        if (tempdata.length === 0) {
            return
        }
        let cName = getName(cCode)
        cNames.push(cName);
        tempdata.forEach(p => {
            tres.push({
                value: p.confirmed
            })
        });
        if (cCode !== 'CN') {
            tres = tres.slice(-30) // 取最近 30 天
        }
        if (tres.length < 30) {
            tres = Array(30 - tres.length).fill(0).concat(tres)
        }
        res.push(tres)
    }

    const xAxis = [];
    let tempdata = data.filter(e => e.countryCode === 'CN' && !e.province);
    tempdata.forEach(p => {
        xAxis.push(p.date)
    });
    if (place !== 'China') {
        chart.chart = chartConfig(xAxis.slice(-30), cNames, res)
    } else {
        chart.chart = chartConfig(xAxis, cNames, res)
    }

    return chart.chart
}