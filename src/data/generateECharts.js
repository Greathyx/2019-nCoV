// Use data from JinRiTouTiao
import ECharts from '../components/ECharts.vue'
import {mapConfig, chartConfig, chartConfigLog, polarStackConfig,
    mapDiscoveryConfig, chartDiscoveryConfig} from './eChartsConfig';
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
    const days = ['01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30', ];

    const province = ['湖北', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西', '四川', '江苏', '北京', '福建', '上海', '广西', '河北', '陕西', '云南', '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏', '吉林', '贵州', '青海', '西藏', '澳门', '香港', '台湾'];

    const data = [
        [270, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [375, 26, 5, 1, 1, 0, 5, 1, 2, 2, 0, 10, 0, 9, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [444, 32, 10, 9, 5, 4, 9, 6, 3, 8, 1, 14, 1, 16, 2, 1, 0, 1, 4, 2, 2, 1, 3, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0],
        [549, 53, 43, 24, 9, 15, 27, 9, 7, 15, 9, 26, 5, 20, 13, 2, 3, 2, 8, 4, 4, 1, 5, 2, 1, 2, 2, 3, 3, 0, 0, 1, 2, 0],
        [729, 78, 62, 43, 32, 39, 57, 21, 18, 28, 18, 36, 10, 33, 23, 8, 5, 5, 8, 9, 12, 6, 8, 4, 2, 3, 3, 4, 4, 0, 0, 2, 4, 2],
        [1052, 98, 104, 69, 83, 60, 75, 39, 36, 44, 31, 51, 18, 40, 33, 13, 15, 11, 19, 15, 17, 9, 10, 7, 7, 4, 4, 4, 5, 1, 0, 3, 5, 4],
        [1423, 146, 128, 100, 128, 70, 110, 63, 48, 69, 47, 68, 29, 53, 46, 18, 22, 16, 22, 21, 22, 13, 14, 14, 11, 5, 7, 6, 7, 4, 0, 4, 6, 6],
        [2714, 188, 173, 143, 168, 106, 132, 87, 72, 90, 70, 80, 59, 66, 51, 33, 35, 26, 33, 30, 27, 20, 23, 19, 13, 10, 10, 8, 9, 6, 0, 6, 8, 7],
        [3354, 241, 296, 221, 206, 152, 147, 121, 109, 108, 99, 91, 82, 80, 58, 48, 46, 51, 43, 37, 36, 27, 24, 24, 16, 13, 12, 9, 9, 6, 0, 6, 10, 8],
        [4586, 272, 296, 221, 206, 152, 165, 130, 162, 108, 99, 111, 84, 96, 58, 48, 56, 55, 43, 38, 39, 35, 27, 24, 16, 13, 12, 9, 9, 6, 1, 7, 10, 8],
        [5806, 354, 428, 277, 278, 200, 206, 158, 162, 142, 129, 121, 101, 128, 87, 65, 66, 76, 46, 44, 45, 39, 31, 29, 18, 14, 17, 14, 12, 8, 1, 7, 12, 9]
    ];

    let sum = [];

    for (let i = 0; i < data.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < data[i].length; j++) {
            sum[i] = sum[i] + data[i][j]
        }
    }

    let mapDiscoveryData = {
        option: null
    };

    mapDiscoveryData.option = mapDiscoveryConfig(days, sum);

    for (let n = 0; n < days.length; n++) {
        let res = [];
        for (let j = 0; j < data[n].length; j++) {
            res.push({
                name: province[j],
                value: data[n][j]
            });
        }
        res.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6);

        res.sort(function(a, b) {
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