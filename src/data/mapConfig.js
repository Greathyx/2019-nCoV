export default function mapConfig (province, data) {
    return {
      title: [{ // 后面再改成英文
        text: 'Current World-wide Confirmed Infection Situation',
        subtext: 'Some countries may limit the number of tests.\nIf the number of confirmed displayed is 0, there may be no data in the country or region.',
        left: 'center'
      }],
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
        inRange:{
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
          {min:500, max:999},
          {min: 100, max: 499},
          {min:10, max: 99},
          {max: 9}
        ],
        orient: 'vertical'
      }],
      series: [{
        left: 'center',
        type: 'map',
        name: '确诊人数',
        label: {
          show: false,
          formatter: '{b}\n{c}',
          position: 'inside',
          fontSize: 14
        },
        mapType: province || 'world',
        data: data,
        zoom: 1.2,
        roam: true,
        scaleLimit:{
          min: 1.2,
          max: 10
        },
        showLegendSymbol: true,
        emphasis: {},
        rippleEffect: {
          show: true,
          brushType: 'stroke',
          scale: 2.5,
          period: 4
        }
      }]
    }
  }