<template>
    <figure>
        <p>update time: {{updateTime}}</p>
        <div id='myCanvas'>
        <e-charts
            ref='map'
            :options='map'
            :init-options='initOptions'
            autoresize
            @click='handleClick'
        ></e-charts></div>
        <div>
        <e-charts
        ></e-charts>
        </div>
    </figure>
</template>

<script>
//import pinyin from 'pinyin'
import {getName} from '../data/name'
import ECharts from '../components/ECharts.vue'
import genMap from '../data/generateMap'
// import data from '../data/data.json'
// import worldMap from 'echarts/map/json/world.json'

export default {
    components:{
        ECharts,
    },
    data(){
        return{
            updateTime: {},
            map: {},
            countryName: '',
            initOptions:{
                renderer: 'canvas'
            }
        }
    },
    mounted(){
        //var myCanvas = document.getElementById('')
    },
    /*
    methods: {
        handleClick(params){

        }
    },
    */
    created(){

        // 虽然很丑
        /*
        this.updateTime=data.lastUpdateTime
        const countries=data.areaTree
        const result=[]
        ECharts.registerMap('world', worldMap)
        countries.forEach(p=>{
            result.push({
                name: getName(p.name),
                value: p.total.confirm
            })
        })

        const map={
            title:[{
                text:'test'
            }],
            visualMap:{
                show:true,
                type:'continuous',
                min:0,
                max:200000,
                range:[0, 100000],
                align: 'right',
                inRange:{
                    color:[
                        'lightskyblue',
                        'orangered'
                    ]
                },
                calculable: true,
                realtime: true,
                itemWidth: 100,
                itemHeight:1000
            },
            series: [{
                left: 'center',
                type: 'map',
                label:{
                    show:false,
                    formatter: '{b}\n{c}',
                    position: 'inside',
                    fontSize: 14
                },
                mapType: 'world',
                data: result,
                zoom: 1.2,
                roam: false
            }]
        }
        this.map=map
        */


        let country = this.$route.path.substr(1)
        this.countryName = getName(country)
        const{
            updateTime,
            // total,
            map
        } = genMap(this.countryName)

        this.updateTime=updateTime
        this.map=map
        console.log(map)

    }
}
</script>