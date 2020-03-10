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
        <div style='width:200px'></div>
        <div>
        <e-charts
            ref='line'
            :options='chart'
            :initOptions='initOptions'
            autoresize
        ></e-charts>
        <v-btn color='normal' @click='fNO'>Norden</v-btn>
        <v-btn color='normal' @click='fEU'>Europe</v-btn>
        <v-btn color='normal' @click='fAsia'>Asia</v-btn>
        <v-btn color='normal' @click='fNA'>North America</v-btn>
        <v-btn color='normal' @click='fCN'>China</v-btn>
        </div>
    </figure>
</template>

<script>
//import pinyin from 'pinyin'
import {getName} from '../data/name'
import ECharts from '../components/ECharts.vue'
import genMap from '../data/generateMap'
import genChart from '../data/generateChart'

export default {
    components:{
        ECharts,
    },
    data(){
        return{
            place: 'Europe',
            updateTime: {},
            map: {},
            chart: {},
            countryName: '',
            initOptions:{
                renderer: 'canvas'
            }
        }
    },
    mounted(){
        this.chart=genChart(this.place)
    },

    methods:{
        fNO: function(){
            this.place='Norden'
            this.chart=genChart(this.place)
        },
        fEU: function(){
            this.place='Europe'
            this.chart=genChart(this.place)
        },
        fAsia: function(){
            this.place='Asia'
            this.chart=genChart(this.place)
        },
        fNA: function(){
            this.place='America'
            this.chart=genChart(this.place)
        },
        fCN: function(){
            this.place='China'
            this.chart=genChart(this.place)
            console.log(this.chart)
        }
        

    },
    created(){
        let country = this.$route.path.substr(1)
        this.countryName = getName(country)
        const{
            updateTime,
            // total,
            map
        } = genMap(this.countryName)
        this.updateTime=updateTime
        this.map=map
    }
}
</script>