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
                    '#600000'
                ]
            },
            pieces: [
                {min: 100000},
                {min: 50000, max: 100000},
                {min: 10000, max: 50000},
                {min: 1000, max: 10000},
                {min: 100, max: 1000},
                {max: 100}
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
                data: confirmed,
                coordinateSystem: 'polar',
                name: 'confirmed',
                stack: 'a'
            }, {
                type: 'bar',
                data: cured,
                coordinateSystem: 'polar',
                name: 'cured',
                stack: 'a'
            }, {
                type: 'bar',
                data: death,
                coordinateSystem: 'polar',
                name: 'death',
                stack: 'a'
            }],
        legend: {
            show: true,
            data: ['confirmed', 'cured', 'death'],
            bottom: '0%'
        }
    }
}

function polarStackConfigLog(countryNames, confirmed, cured, death) {
    return {
        title: {
            text: 'Confirmed, Deaths & Cured Situation',
            left: 'center',
        },
        angleAxis: {
            type: 'category',
            data: countryNames
        },
        radiusAxis: {
            type: 'log',
            logBase: 10
        },
        polar: {},
        tooltip: {},
        series: [
            {
                type: 'bar',
                data: confirmed,
                // color: 'red',
                coordinateSystem: 'polar',
                name: 'confirmed',
                stack: 'a'
            }, {
                type: 'bar',
                data: cured,
                // color: 'green',
                coordinateSystem: 'polar',
                name: 'cured',
                stack: 'a'
            }, {
                type: 'bar',
                data: death,
                // color: 'grey',
                coordinateSystem: 'polar',
                name: 'death',
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
                        min: 10000,
                        color: '#BB0000'
                    },
                    {
                        min: 1000,
                        max: 10000,
                        color: '#BD430A'
                    },
                    {
                        min: 500,
                        max: 1000,
                        color: '#E08150'
                    },
                    {
                        min: 100,
                        max: 500,
                        color: '#E9B090'
                    },
                    {
                        min: 10,
                        max: 100,
                        color: '#F2DDD2'
                    },
                    {
                        min: 0,
                        max: 10,
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
                    right: '4%',
                    top: '36%',
                    bottom: '9%',
                    width: '20%'
                },
                // line chart
                {
                    right: '1%',
                    top: '10%',
                    bottom: '75%',
                    width: '23%'
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
        tooltip: {
            formatter: '{b}:\n{c}'
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

function pictorialBarConfig(countryNames, cured_rate, death_rate) {
    let spirit = 'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13';
    let maxData;

    let max_rate = Math.max(Math.max(...cured_rate), Math.max(...death_rate));
    if (max_rate >= 0 && max_rate < 0.01) {
        maxData = 0.01;
    } else if (max_rate >= 0.01 && max_rate < 0.05) {
        maxData = 0.05;
    } else if (max_rate >= 0.05 && max_rate < 0.1) {
        maxData = 0.1;
    } else if (max_rate >= 0.1 && max_rate < 0.5) {
        maxData = 0.5;
    } else {
        maxData = 1;
    }

    return {
        title: [{
            text: 'Cured & Death Rate for Different Countries',
            left: 'center'
        }],
        legend: {
            data: ['death', 'cured'],
            top: 30
        },
        // tooltip: {
        //     trigger: 'axis',
        //     axisPointer: {
        //         type: 'shadow'
        //     },
        //     formatter: 'cured:{c}%\n death:\n{e}%'
        // },
        grid: {
            containLabel: true,
            top: 'center',
            height: 80 * countryNames.length,
            left: 10,
            right: 70
        },
        xAxis: {
            max: maxData,
            splitLine: {show: false},
            offset: 10,
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                margin: 10
            }
        },
        yAxis: {
            data: countryNames,
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        series: [
            {
                // current data
                name: 'death',
                type: 'pictorialBar',
                symbol: spirit,
                symbolOffset: [0, 18],
                symbolRepeat: 'fixed',
                symbolSize: ['20%', '40%'],
                // symbolMargin: '5%',
                symbolClip: true,
                // symbolSize: 20,
                symbolBoundingData: maxData,
                data: death_rate,
                markLine: {
                    symbol: 'none',
                    label: {
                        formatter: 'max: {c}',
                        position: 'start'
                    },
                    lineStyle: {
                        color: 'red',
                        type: 'dotted',
                        opacity: 0.2,
                        width: 2
                    },
                    data: [{
                        type: 'max'
                    }]
                },
                z: 10
            }, {
                // full data
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return (death_rate[params.dataIndex] * 100).toFixed(2) + '%';
                    },
                    position: 'right',
                    offset: [10, 18],
                    color: 'red',
                    fontSize: 14
                },
                animationDuration: 0,
                symbolOffset: [0, 18],
                symbolRepeat: 'fixed',
                symbolSize: ['20%', '40%'],
                // symbolMargin: '5%',
                symbol: spirit,
                // symbolSize: 20,
                symbolBoundingData: maxData,
                data: death_rate,
                z: 5
            }, {
                // current data
                name: 'cured',
                type: 'pictorialBar',
                symbol: spirit,
                symbolOffset: [0, -18],
                symbolRepeat: 'fixed',
                symbolSize: ['20%', '40%'],
                // symbolMargin: '5%',
                symbolClip: true,
                // symbolSize: 20,
                symbolBoundingData: maxData,
                data: cured_rate,
                markLine: {
                    symbol: 'none',
                    label: {
                        formatter: 'max: {c}',
                        position: 'start'
                    },
                    lineStyle: {
                        color: 'green',
                        type: 'dotted',
                        opacity: 0.2,
                        width: 2
                    },
                    data: [{
                        type: 'max'
                    }]
                },
                z: 10
            }, {
                // full data
                type: 'pictorialBar',
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                label: {
                    show: true,
                    formatter: function (params) {
                        return (cured_rate[params.dataIndex] * 100).toFixed(2) + '%';
                    },
                    position: 'right',
                    offset: [10, -18],
                    color: 'green',
                    fontSize: 14
                },
                animationDuration: 0,
                symbolOffset: [0, -18],
                symbolRepeat: 'fixed',
                symbolSize: ['20%', '40%'],
                // symbolMargin: '5%',
                symbol: spirit,
                // symbolSize: 20,
                symbolBoundingData: maxData,
                data: cured_rate,
                z: 5
            }]
    }
}

function futureLineConfig(r2) {
    const N = 100000;      //%人口总数
    const E = 0;          //%潜伏者
    const I = 1;          //%传染者
    const S = N - I;      //%易感者
    const R = 0;          //%康复者

    const r = 2;         //%感染者接触易感者的人数
    const B = 0.1;       //%传染概率
    const a = 0.6;        //%潜伏者转化为感染者概率
    // const r2 = 20;        //%潜伏者接触易感者的人数
    const B2 = 0.03;      //%潜伏者传染正常人的概率
    const y = 0.1;        //%康复概率
    // const k = 0.025373;     //%死亡
    let Sa = [];
    let Ea = [];
    let Ia = [];
    let Ra = [];
    Sa.push(S);
    Ea.push(E);
    Ia.push(I);
    Ra.push(R);
    let index = [];
    index.push(0 + "");
    for (let idx = 0; idx < 140; idx++) {
        index.push((idx + 1) + "");
        Sa.push(Sa[idx] - r * B * Sa[idx] * Ia[idx] / N - r2 * B2 * Sa[idx] * Ea[idx] / N);
        Ea.push(Ea[idx] + r * B * Sa[idx] * Ia[idx] / N - a * Ea[idx] + r2 * B2 * Sa[idx] * Ea[idx] / N);
        Ia.push(Ia[idx] + a * Ea[idx] - y * Ia[idx]);
        Ra.push(Ra[idx] + y * Ia[idx]);
    }

    return {
        legend: {
            show: true
        },
        tooltip: {
            trigger: 'axis',
            // showContent: false
        },
        dataset: {
            source: [
                ['product', ...index],
                ['Suspectible', ...Sa],
                ['Exposed', ...Ea],
                ['Infected', ...Ia],
                ['Recovered', ...Ra]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '10%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        ]
    }
}

export {
    mapConfig,
    chartConfig,
    chartConfigLog,
    polarStackConfig,
    polarStackConfigLog,
    mapDiscoveryConfig,
    chartDiscoveryConfig,
    pictorialBarConfig,
    futureLineConfig
}