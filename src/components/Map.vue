<template>
  <figure>
    <p style='postion: center'>update time: {{updateTime}}</p>
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
            <v-container>
                <v-tabs>
                    <v-tab @click='charttype=0'>Line Chart</v-tab>
                    <v-tab @click='charttype=1'>Polar Stack</v-tab>
                    <v-tab @click='charttype=2'>Another Chart</v-tab>
                </v-tabs>
            </v-container>
            <div v-show='charttype===0'>
                <e-charts
                        ref='line'
                        :options='chart'
                        :initOptions='initOptions'
                        autoresize
                ></e-charts>
            </div>
            <div v-show='charttype===1'>
                <e-charts
                    ref='polar stack'
                    :options='polarstack'
                    :initOptions='initOptions'
                    autoresize
                ></e-charts>
            </div>
            <div v-show='charttype===2'>
                <p>another chart</p>
            </div>
            <div>
                <v-btn style="position:center" color='normal' @click='reset'>Reset</v-btn>
                <v-btn sytle="position:center" color='normal' @click='log'>{{LOGbtntext}}</v-btn>
            </div>
        </div>
    </div>
  </figure>
</template>

<script>
    //import {getName} from '../data/name'
    import ECharts from '../components/ECharts.vue'
    import genMap from '../data/generateMap'
    import genChart from '../data/generateChart'
    import genPolarstack from '../data/generatePolarstack'
    import 'echarts/theme/macarons' // 更改主题？还没实现

    export default {
        components: {
            ECharts,
        },

        data: () => ({
            data: [],
            places: [],
            charttype: 0,
            linechartType: 'value', // 暂时只对 line chart 有效
            LOGbtntext: 'log',
            updateTime: {},
            map: {},
            chart: {},
            polarstack: {},
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
                this.polarstack = genPolarstack(this.places)
            },
            reset: function () {
                this.places=[]
                this.chart = genChart(this.places, this.linechartType)
                this.polarstack = genPolarstack(this.places)
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
            const {
                updateTime,
                // total,
                map
            } = genMap();
            this.updateTime = updateTime;
            this.map = map;
        }
    }
</script>