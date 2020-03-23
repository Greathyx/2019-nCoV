function mapConfig(data) {
    return {
        title: [{
            text: 'Current World-wide Confirmed Infection Situation',
            subtext: 'Some countries may limit the number of tests.\n' +
                'If the number of confirmed displayed is 0, ' +
                'there may be no data in the country or region.',
            left: 'center'
        }],
        tooltip: {
            trigger: 'item'
        },
        visualMap: [{
            show: true,
            type: 'piecewise',
            min: 0,
            max: 100000,
            realtime: true,
            itemWidth: 10,
            itemHeight: 10,
            align: 'right',
            top: 'center',
            inRange: {
                color: [
                    '#ffc0b1',
                    '#ff8c71',
                    '#ef1717',
                    '#9c0505',
                    '#800000'
                ]
            },
            pieces: [
                {min: 10000},
                {min: 1000, max: 9999},
                {min: 500, max: 999},
                {min: 100, max: 499},
                {min: 10, max: 99},
                {max: 9}
            ],
            orient: 'vertical'
        }],
        series: [{
            left: 'center',
            type: 'map',
            name: 'Confirmed: ',
            label: {
                show: false,
                formatter: '{b}',
                position: 'inside',
                fontSize: 14
            },
            mapType: 'world',
            data: data,
            zoom: 1.2,
            roam: true,
            scaleLimit: {
                min: 1.2,
                max: 10
            },
            showLegendSymbol: true,
            emphasis: {
                areaColor: '#FFC107'
            },
            rippleEffect: {
                show: true,
                brushType: 'stroke',
                scale: 2.5,
                period: 4
            }
        }]
    }
}

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

function mapDiscoveryConfig(days, sum) {
    return {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                playInterval: 2000,
                symbolSize: 12,
                left: '5%',
                right: '5%',
                bottom: '0%',
                width: '90%',
                data: days,
                tooltip: {
                    formatter: days
                },
            },

            tooltip: {
                show: true,
                formatter: function (params) {
                    return params.name + '：' + params.data['value']
                },
            },
            visualMap: {
                type: 'piecewise',
                pieces: [
                    {
                        min: 9999,
                        color: '#BB0000'
                    },
                    {
                        min: 1000,
                        max: 9999,
                        color: '#BD430A'
                    },
                    {
                        min: 500,
                        max: 999,
                        color: '#E08150'
                    },
                    {
                        min: 100,
                        max: 499,
                        color: '#E9B090'
                    },
                    {
                        min: 10,
                        max: 99,
                        color: '#F2DDD2'
                    },
                    {
                        max: 9,
                        color: '#FFFFFF'
                    }
                ],
                orient: 'vertical',
                itemWidth: 25,
                itemHeight: 15,
                showLabel: true,
                seriesIndex: [0],

                textStyle: {
                    color: '#7B93A7'
                },
                bottom: '10%',
                left: "5%",
            },
            grid: [
                // bar chart
                {
                    right: '5%',
                    top: '36%',
                    bottom: '9%',
                    width: '22%'
                },
                // line chart
                {
                    right: '3%',
                    top: '10%',
                    bottom: '75%',
                    width: '25%'
                }],
            xAxis: [{
                min: 0,
                max: 50000,
                show: false
            }, {
                data: days,
                gridIndex: 1
            }], //折线图x轴数据赋值，指定坐标信息,
            yAxis: [{
                inverse: true,
                offset: '2',
                'type': 'category',
                data: '',
                nameTextStyle: {
                    color: '#fff'
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    //rotate:45,
                    textStyle: {
                        fontSize: 14,
                        color: '#000000',
                    },
                    interval: 0
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#333'
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#333'
                    }
                },
            }, {
                name: 'Confirmed',
                inverse: false,
                offset: '2',
                'type': 'category',
                nameTextStyle: {
                    color: '#000'
                },
                axisTick: {
                    show: true,
                },
                axisLabel: {
                    //rotate:45,
                    textStyle: {
                        fontSize: 14,
                        color: '#000000',
                    },
                    interval: 'auto'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#333'
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#333'
                    }
                },
                gridIndex: 1
            }],
            geo: {
                map: 'world',
                zoom: 1.2,
                roam: true,
                right: '35%',
                left: '5%',
                label: {
                    emphasis: {
                        show: true,
                    }
                },
                itemStyle: {
                    emphasis: {
                        areaColor: '#FFC107'
                    }
                }
            },
            series: [
                {
                    name: 'mapSer',
                    type: 'map',
                    map: 'china',
                    roam: false,
                    geoIndex: 0,
                    label: {
                        show: false,
                    },
                },
                {
                    name: '',
                    type: 'bar',
                    zlevel: 2,
                    barWidth: '40%',
                    label: {
                        normal: {
                            show: true,
                            fontSize: 14,
                            position: 'right',
                            formatter: '{c}'
                        }
                    },
                },
                {
                    name: '确诊新增曲线',
                    type: 'line',
                    xAxisIndex: 1, //指定折线图数据显示到：grid坐标系：0
                    yAxisIndex: 1,
                    data: sum //折线图y轴数据赋值
                }],
        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
        options: []
    }
}

function chartDiscoveryConfig(days_n, sum_n, res, res1, res2) {
    return {
        backgroundColor: '#E0F2F1',
        title: [{
            text: days_n + ' Confirmed Infections Worldwide: ' + sum_n,
            textStyle: {
                color: '#2D3E53',
                fontSize: 28
            },
            left: 20,
            top: 20,
        },
            {
                show: true,
                text: 'Top Ten Countries Infected',
                textStyle: {
                    color: '#2D3E53',
                    fontSize: 18
                },
                right: '10%',
                top: '31%'
            }
        ],
        yAxis: {
            data: res1,
        },
        series: [{
            type: 'map',
            data: res
        }, {
            type: 'bar',
            data: res2,
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        let colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#FF0000' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#990000' // 100% 处的颜色
                            }]
                        },
                            {
                                colorStops: [{
                                    offset: 0,
                                    color: '#00C0FA' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2F95FA' // 100% 处的颜色
                                }]
                            }
                        ];
                        if (params.dataIndex < 3) {
                            return colorList[0]
                        } else {
                            return colorList[1]
                        }
                    },
                }
            },
        }]
    }
}

export {
    mapConfig,
    chartConfig,
    chartConfigLog,
    polarStackConfig,
    mapDiscoveryConfig,
    chartDiscoveryConfig
}