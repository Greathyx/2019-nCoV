<template>
  <figure style="width: 100%">
    <div class="fill-height map_chart">
      <p style='position: center'>updated time: {{updateTime}}</p>
      <e-charts
              ref='map'
              :options='map'
              :init-options='initOptions'
              @click='getClick'
              autoresize
              style="width: inherit"
      ></e-charts>
    </div>

    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            right
            width="400"
    >
      <div class="fill-height right_sidebar">
<!--        <e-charts-->
<!--                ref='line'-->
<!--                :options='chart'-->
<!--                :initOptions='initOptions'-->
<!--                autoresize-->
<!--                style="width: inherit; height: 300px"-->
<!--        ></e-charts>-->

<!--        <e-charts-->
<!--                ref='polar stack'-->
<!--                :options='polarstack'-->
<!--                :initOptions='initOptions'-->
<!--                autoresize-->
<!--                style="width: inherit; height: 300px"-->
<!--        ></e-charts>-->

        <div>
          <v-btn style="position:center; margin-right: 15px" color='normal' @click='reset'>
            Reset
          </v-btn>
          <v-btn sytle="position:center" color='normal' @click='log'>{{LOGbtntext}}</v-btn>
        </div>
      </div>
      <!--      </div>-->
    </v-navigation-drawer>
    <!--        <div style="display: flex; flex-direction: column; width: 40%">-->
    <!--            <v-container>-->
    <!--                <v-tabs>-->
    <!--                    <v-tab @click='charttype=0'>Line Chart</v-tab>-->
    <!--                    <v-tab @click='charttype=1'>Polar Stack</v-tab>-->
    <!--                    <v-tab @click='charttype=2'>Another Chart</v-tab>-->
    <!--                </v-tabs>-->
    <!--            </v-container>-->
    <!--            <div v-show='charttype===0'>-->
    <!--                <e-charts-->
    <!--                        ref='line'-->
    <!--                        :options='chart'-->
    <!--                        :initOptions='initOptions'-->
    <!--                        autoresize-->
    <!--                ></e-charts>-->
    <!--            </div>-->
    <!--            <div v-show='charttype===1'>-->
    <!--                <e-charts-->
    <!--                    ref='polar stack'-->
    <!--                    :options='polarstack'-->
    <!--                    :initOptions='initOptions'-->
    <!--                    autoresize-->
    <!--                ></e-charts>-->
    <!--            </div>-->
    <!--            <div v-show='charttype===2'>-->
    <!--                <p>another chart</p>-->
    <!--            </div>-->
    <!--            <div>-->
    <!--                <v-btn style="position:center" color='normal' @click='reset'>Reset</v-btn>-->
    <!--                <v-btn sytle="position:center" color='normal' @click='log'>{{LOGbtntext}}</v-btn>-->
    <!--            </div>-->
    <!--        </div>-->
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
            drawer: null,
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
            getClick: function (params) {
                this.places.push(params.name);
                this.chart = genChart(this.places, this.linechartType);
                this.polarstack = genPolarstack(this.places);
            },
            reset: function () {
                this.places = [];
                this.chart = genChart(this.places, this.linechartType);
                this.polarstack = genPolarstack(this.places);
            },
            log: function () {
                console.log(this.chart);
                if (this.linechartType === 'value') {
                    this.linechartType = 'log';
                    this.LOGbtntext = 'unlog'
                } else {
                    this.linechartType = 'value';
                    this.LOGbtntext = 'log'
                }
                this.chart = genChart(this.places, this.linechartType)
            }
        },

        created() {
            const {
                updateTime,
                map
            } = genMap();
            this.updateTime = updateTime;
            this.map = map;
        }
    }
</script>

<style>
  .right_sidebar {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-basis: 400px;
    min-width: 400px; /*确保当页面很小的时候，左侧变小*/
    flex-grow: 0;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-align: center
  }

  .map_chart {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>