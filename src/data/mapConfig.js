export default function mapConfig (province, data) {
    return {
      title: [{ // 后面再改成英文
        text: '各国家及地区诊断人数',
        subtext: '数据来自腾讯新闻和丁香园',
        sublink: 'www.qq.com',
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
          {min: 5000, max: 10000},
          {min: 1000, max: 5000},
          {min: 100, max: 1000},
          {max: 100}
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