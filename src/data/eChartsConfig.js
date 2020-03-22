function chartConfig(xAxis, cNames, res) {
    return {
        title: [{
            text: 'Confirmed Trends in Last 30 Days',
            left: 'center'
        }],
        grid: {
            right: '13%',
            left: '15%'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            }
        },
        legend: {
            data: cNames,
            bottom: '0%'
        },
        xAxis: [{
            type: 'category',
            name: 'Date',
            data: xAxis
        }],
        yAxis: [{
            type: 'value',
            name: 'Confirmed'
        }],
        series: [{
            name: cNames[0],
            type: 'line',
            data: res[0]
        }, {
            name: cNames[1],
            type: 'line',
            data: res[1]
        }, {
            name: cNames[2],
            type: 'line',
            data: res[2]
        }, {
            name: cNames[3],
            type: 'line',
            data: res[3]
        }, {
            name: cNames[4],
            type: 'line',
            data: res[4]
        }, {
            name: cNames[5],
            type: 'line',
            data: res[5]
        }, {
            name: cNames[6],
            type: 'line',
            data: res[6]
        }, {
            name: cNames[7],
            type: 'line',
            data: res[7]
        }]
    }
}

function chartConfigLog(xAxis, cNames, res) {
    return {
        title: [{
            text: 'Confirmed Trends in Last 30 Days',
            left: 'center'
        }],
        grid: {
            right: '13%',
            left: '15%'
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            }
        },
        legend: {
            data: cNames,
            bottom: '0%'
        },
        xAxis: [{
            type: 'category',
            name: 'Date',
            data: xAxis
        }],
        yAxis: [{
            type: 'log',
            logBase: 10,
            name: 'Confirmed'
        }],
        series: [{
            name: cNames[0],
            type: 'line',
            data: res[0]
        },
            {
                name: cNames[1],
                type: 'line',
                data: res[1]
            },
            {
                name: cNames[2],
                type: 'line',
                data: res[2]
            },
            {
                name: cNames[3],
                type: 'line',
                data: res[3]
            },
            {
                name: cNames[4],
                type: 'line',
                data: res[4]
            },
            {
                name: cNames[5],
                type: 'line',
                data: res[5]
            },
            {
                name: cNames[6],
                type: 'line',
                data: res[6]
            },
            {
                name: cNames[7],
                type: 'line',
                data: res[7]
            },
        ]
    }
}

function polarStackConfig(countryNames, confirmed, cured, death) {
    return {
        title: {
            text: 'Confirmed, Deaths & Cured Situation',
            left: 'center',
        },
        angleAxis: {
            type: 'category',
            data: countryNames
        },
        radiusAxis: {},
        polar: {},
        tooltip: {},
        series: [
            {
                type: 'bar',
                data: death,
                coordinateSystem: 'polar',
                name: 'death',
                stack: 'a'
            }, {
                type: 'bar',
                data: cured,
                coordinateSystem: 'polar',
                name: 'cured',
                stack: 'a'
            }, {
                type: 'bar',
                data: confirmed,
                coordinateSystem: 'polar',
                name: 'confirmed',
                stack: 'a'
            }],
        legend: {
            show: true,
            data: ['confirmed', 'cured', 'death'],
            bottom: '0%'
        }
    }
}


export {
    chartConfig,
    chartConfigLog,
    polarStackConfig,
}