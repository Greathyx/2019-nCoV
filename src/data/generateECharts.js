// Use data from JinRiTouTiao
import ECharts from '../components/ECharts.vue'
import {
    mapConfig, chartConfig, chartConfigLog, polarStackConfig,
    mapDiscoveryConfig, chartDiscoveryConfig
} from './eChartsConfig';
import worldMap from 'echarts/map/json/world.json'
import data from './data.json'
import {getName, CODE, getCode} from './name'


// generate date of today
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan is 0
const yyyy = today.getFullYear();
const today_date = yyyy + '-' + mm + '-' + dd;


function genMap() {
    const result = [];

    let mapData = {
        updateTime: today_date,
        map: null
    };

    ECharts.registerMap('world', worldMap);
    // 把 NaN 变成 0
    // 先用 0 把所有地区填满
    for (let code of CODE) {
        result.push({
            name: getName(code),
            value: 0
        })
    }

    for (let ccode of CODE) {
        let temp = data.filter(e => e.countryCode === ccode && !e.province && e.date === today_date);
        if (temp.length === 0) {
            continue
        }
        result.push({
            name: getName(ccode),
            value: temp[0].confirmed
        })
    }

    mapData.map = mapConfig(result);
    return mapData
}


function genChart(places, type) {
    const chart = {
        chart: null
    };

    let res = [];

    // places 是传进来的国家全名数组
    for (var place of places) {
        var code = getCode(place);
        var tres = [];
        let tempdata = data.filter(e => e.countryCode === code && !e.province);
        if (tempdata.length === 0) {
            continue
        }
        tempdata.forEach(p => {
            tres.push({
                value: p.confirmed
            })
        });
        tres = tres.slice(-30); // 取最近 30 天
        // 不足 30 天则前面用 0 补齐
        if (tres.length < 30) {
            tres = Array(30 - tres.length).fill(0).concat(tres)
        }
        res.push(tres)
    }

    const xAxis = [];
    let temp_data = data.filter(e => e.countryCode === 'CN' && !e.province);
    temp_data.forEach(p => {
        xAxis.push(p.date)
    });

    if (type === 'log') {
        chart.chart = chartConfigLog(xAxis.slice(-30), places, res)
    } else {
        chart.chart = chartConfig(xAxis.slice(-30), places, res)
    }

    return chart.chart
}


function genPolarStack(places, type) {
    let confirmed = [];
    let cured = [];
    let death = [];
    let confirmed_log = [];
    let cured_log = [];
    let death_log = [];

    let psData = {
        ps: null
    };

    for (let place of places) {
        let code = getCode(place);
        let temp = data.filter(e => e.countryCode === code && !e.province && e.date === today_date);
        cured.push(temp[0].cured);
        death.push(temp[0].dead);
        confirmed.push(temp[0].confirmed);
        // let t = temp[0].confirmed - cured.slice(-1) - death.slice(-1);
        // confirmed.push(t) // 因为是剩下的 confirmed

        cured_log.push(getTenBaseLog(temp[0].cured).toFixed(2));
        death_log.push(getTenBaseLog(temp[0].dead).toFixed(2));
        confirmed_log.push(getTenBaseLog(temp[0].confirmed).toFixed(2));
    }

    if (type === 'log') {
        psData.ps = polarStackConfig(places, confirmed_log, cured_log, death_log);
    } else {
        psData.ps = polarStackConfig(places, confirmed, cured, death);
    }

    return psData.ps
}


function genMapDiscovery() {
    // 首先要注册世界地图
    ECharts.registerMap('world', worldMap);

    const countries = [];

    for (var code of CODE) {
        countries.push(getName(code))
    }

    let days = ['01-20', '01-27', '02-03', '02-10', '02-17', '02-24', '03-02', '03-09', '03-16', '03-23', '03-30', '04-06'];

    const dataset = [];

    for (let i = 0; i < days.length; i++) {
        // 在当前日期之后则 break
        let tdate = new Date(yyyy + '-' + days[i]);
        if (tdate.getTime() > today.getTime()) {
            days = days.slice(0, i);
            break
        } else {
            dataset[i] = [];
            for (code of CODE) {
                let temp = data.filter(e => e.countryCode === code && !e.province && e.date === yyyy + '-' + days[i])
                if (temp.length === 0) {
                    dataset[i].push(0)
                } else {
                    dataset[i].push(temp[0].confirmed)
                }
            }
        }
    }

    let sum = [];

    for (let i = 0; i < dataset.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < dataset[i].length; j++) {
            sum[i] = sum[i] + dataset[i][j]
        }
    }

    let mapDiscoveryData = {
        option: null
    };

    mapDiscoveryData.option = mapDiscoveryConfig(days, sum);

    for (let n = 0; n < days.length; n++) {
        let res = [];
        for (let j = 0; j < dataset[n].length; j++) {
            res.push({
                name: countries[j],
                value: dataset[n][j]
            });
        }
        res.sort(function (a, b) {
            return b.value - a.value;
        }).slice(0, 6);

        res.sort(function (a, b) {
            return a.value - b.value;
        });
        let res1 = [];
        let res2 = [];
        for (let t = 0; t < 10; t++) {
            res1[t] = res[res.length - 1 - t].name;
            res2[t] = res[res.length - 1 - t].value;
        }

        mapDiscoveryData.option.options.push(
            chartDiscoveryConfig(days[n], sum[n], res, res1, res2)
        );
    }

    return mapDiscoveryData.option
}

function getTenBaseLog(x) {
    return Math.log(x) / Math.log(10);
}

export {
    genMap,
    genChart,
    genPolarStack,
    genMapDiscovery,
}
