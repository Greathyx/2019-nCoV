// 极坐标堆叠图的图表设置
export default function polarstackConfig (countryNames, confirmed, cured, death) {
    return {
        angleAxis: {
            type: 'category',
            data: countryNames
        },
        radiusAxis: {
        },
        polar: {

        },
        tooltip:{

        },
        series:[{
            type: 'bar',
            data: confirmed,
            coordinateSystem: 'polar',
            name: 'Confirmed-death-cured',
            stack: 'a'
        },{
            type: 'bar',
            data: cured,
            coordinateSystem: 'polar',
            name: 'cured',
            stack: 'a'
        },{
            type: 'bar',
            data: death,
            coordinateSystem: 'polar',
            name: 'death',
            stack: 'a'
        }],
        legend:{
            data: ['Confirmed-cured-death', 'Cured', 'Death']
        }
    }
}