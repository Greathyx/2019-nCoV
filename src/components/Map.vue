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
    </figure>
</template>

<script>
//import pinyin from 'pinyin'
import {getName} from '../data/name'
import ECharts from '../components/ECharts.vue'
import genMap from '../data/generateMap'

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