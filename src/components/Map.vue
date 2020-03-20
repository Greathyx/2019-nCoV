<template>
  <figure>
    <p>update time: {{updateTime}}</p>
    <div style="display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center">
        <div style="display: flex; order: -1">
            <e-charts
                    ref='map'
                    :options='map'
                    :init-options='initOptions'
                    @click='getClick'
                    autoresize
            ></e-charts>
        </div>
        <div style="display: flex; flex-direction: column; width: 40%">
            <e-charts
                    ref='line'
                    :options='chart'
                    :initOptions='initOptions'
                    autoresize
            ></e-charts>
            <div>
                <v-btn style="margin-right: 15px" color='normal' @click='reset'>Reset</v-btn>
                <v-btn sytle="margin-right: 15px" color='normal' @click='log'>{{LOGbtntext}}</v-btn>
            </div>
        </div>
    </div>
  </figure>
</template>

<script>
    import {getName} from '../data/name'
    import ECharts from '../components/ECharts.vue'
    import genMap from '../data/generateMap'
    import genChart from '../data/generateChart'
    import 'echarts/theme/macarons' // 更改主题？还没实现
    //import {countries} from './Global.vue' // 全局变量，用来储存图表使用的国家名

    export default {
        components: {
            ECharts,
        },

        data: () => ({
            data: [],
            places: [],
            linechartType: 'value',
            LOGbtntext: 'log',
            updateTime: {},
            map: {},
            chart: {},
            countryName: '',
            initOptions: {
                renderer: 'canvas',
                theme: 'macarons' // 更改主题？
            }
        }),

        mounted() {
            //this.chart = genChart(this.place, 'value')
        },

        methods: {
            getClick: function(params){
                this.places.push(params.name)
                this.chart=genChart(this.places, this.linechartType)
            },
            reset: function () {
                this.places=[]
                this.chart = genChart(this.places, this.linechartType)
            },
            log: function(){
                console.log(this.chart)
                if(this.linechartType=='value'){
                    this.linechartType='log'
                    this.LOGbtntext='unlog'
                }else{
                    this.linechartType='value'
                    this.LOGbtntext='log'
                }
                this.chart=genChart(this.places, this.linechartType)
            }
        },

        created() {
            let country = this.$route.path.substr(1);
            this.countryName = getName(country);
            const {
                updateTime,
                // total,
                map
            } = genMap(this.countryName);
            this.updateTime = updateTime;
            this.map = map;
        }
    }
</script>