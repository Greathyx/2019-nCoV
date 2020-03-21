export default function chartConfig(xAxis, cNames, res) {
    return {
        title: [{
            text: 'Confirmed Trends in Last 30 Days',
            left: 'center'
        }],
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
            }
        },
        legend: {
            data: cNames,
            right: 'top',
            top: '8%'
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