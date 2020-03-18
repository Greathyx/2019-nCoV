<template>
  <figure>
    <p>update time: {{updateTime}}</p>
    <div style="display: flex; justify-content: center">
      <e-charts
              ref='map'
              :options='map'
              :init-options='initOptions'
              autoresize
      ></e-charts>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center">
      <e-charts
              ref='line'
              :options='chart'
              :initOptions='initOptions'
              autoresize
      ></e-charts>
      <div>
        <v-btn style="margin-right: 15px" color='normal' @click='fNO'>Norden</v-btn>
        <v-btn style="margin-right: 15px" color='normal' @click='fEU'>Europe</v-btn>
        <v-btn style="margin-right: 15px" color='normal' @click='fAsia'>Asia</v-btn>
        <v-btn style="margin-right: 15px" color='normal' @click='fNA'>North America</v-btn>
        <v-btn color='normal' @click='fCN'>China</v-btn>
      </div>
    </div>
  </figure>
</template>

<script>
    import {getName} from '../data/name'
    import ECharts from '../components/ECharts.vue'
    import genMap from '../data/generateMap'
    import genChart from '../data/generateChart'

    export default {
        components: {
            ECharts,
        },

        data: () => ({
            data: [],
            place: 'Europe',
            updateTime: {},
            map: {},
            chart: {},
            countryName: '',
            initOptions: {
                renderer: 'canvas'
            }
        }),

        mounted() {
            this.chart = genChart(this.place)
        },

        methods: {
            fNO: function () {
                this.place = 'Norden';
                this.chart = genChart(this.place)
            },
            fEU: function () {
                this.place = 'Europe';
                this.chart = genChart(this.place)
            },
            fAsia: function () {
                this.place = 'Asia';
                this.chart = genChart(this.place)
            },
            fNA: function () {
                this.place = 'America';
                this.chart = genChart(this.place)
            },
            fCN: function () {
                this.place = 'China';
                this.chart = genChart(this.place);
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