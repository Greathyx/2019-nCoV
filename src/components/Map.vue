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
<!--        <p>-->
<!--          Choose countries in the map to generate charts.-->
<!--        </p>-->

        <div class="my_echarts">
          <e-charts
                  ref='line'
                  :options='chart'
                  :initOptions='initOptions'
                  autoresize
                  style="width: inherit; height: 320px"
          />
          <div style="width: 100%; margin: 10px auto">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on"
                       style="position:center; margin-right: 15px"
                       color='normal'
                       @click='reset'
                >
                  Reset
                </v-btn>
              </template>
              <span>deselect all countries</span>
            </v-tooltip>

            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn dark v-on="on"
                       style="position:center"
                       color='normal'
                       @click='log'
                >
                  {{LOGbtntext}}
                </v-btn>
              </template>
              <span>{{LOGbtntext === "unlog" ? "switch normal value" : "switch logarithm (10 based)"}}</span>
            </v-tooltip>

<!--            <v-divider style="margin-top: 20px; margin-right: 30px; margin-left: 30px"/>-->
          </div>

          <v-divider style="margin: 10px 30px"/>

          <!--          <e-charts-->
          <!--                  ref='polar stack'-->
          <!--                  :options='polarstack'-->
          <!--                  :initOptions='initOptions'-->
          <!--                  autoresize-->
          <!--                  style="width: inherit; height: 360px"-->
          <!--          />-->
          <e-charts
                  ref='pictorial bar'
                  :options='pictorialBar'
                  :initOptions='initOptions'
                  autoresize
                  style="width: inherit; min-height: 200px; max-height: 550px"
          />
        </div>
      </div>
    </v-navigation-drawer>

    <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            top
            color="teal"
    >
      <div style="width: 100%; text-align: center">{{ text }}</div>
    </v-snackbar>
  </figure>
</template>

<script>
    import ECharts from '../components/ECharts.vue'
    import {genMap, genChart, genPictorialBar} from '../data/generateECharts';
    // import macarons from 'echarts/theme/macarons' // 更改主题？还没实现

    export default {
        components: {
            ECharts,
        },

        data: () => ({
            drawer: null,
            data: [],
            places: [],
            chartType: 'value', // 暂时只对 line chart 有效
            LOGbtntext: 'log',
            updateTime: {},
            map: {},
            chart: {},
            polarstack: {},
            pictorialBar: {},
            initOptions: {
                renderer: 'canvas',
                // theme: macarons // 更改主题？
            },
            snackbar: false,
            text: 'You can only select 5 countries at most!',
            timeout: 2000,
        }),

        mounted() {
            this.chart = genChart(this.places, this.chartType);
            // this.polarstack = genPolarStack(this.places, this.chartType);
            this.pictorialBar = genPictorialBar(this.places);
        },

        methods: {
            getClick: function (params) {
                const index = this.places.indexOf(params.name);
                if (index > -1) {
                    this.places.splice(index, 1);
                } else {
                    // 最多选择5个国家进行比较
                    if (this.places.length >= 5) {
                        this.snackbar = true;
                        return
                    }
                    this.places.push(params.name);
                }
                this.chart = genChart(this.places, this.chartType);
                this.pictorialBar = genPictorialBar(this.places);
                // this.polarstack = genPolarStack(this.places, this.chartType);
            },
            reset: function () {
                this.places = [];
                this.chart = genChart(this.places, this.chartType);
                this.pictorialBar = genPictorialBar(this.places);
                // this.polarstack = genPolarStack(this.places, this.chartType);
            },
            log: function () {
                if (this.chartType === 'value') {
                    this.chartType = 'log';
                    this.LOGbtntext = 'unlog'
                } else {
                    this.chartType = 'value';
                    this.LOGbtntext = 'log'
                }
                this.chart = genChart(this.places, this.chartType);
                // this.polarstack = genPolarStack(this.places, this.chartType);
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
    /*flex-basis: 400px;*/
    flex-grow: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    /*padding-top: 20px;*/
    /*padding-bottom: 20px;*/
  }

  .map_chart {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .my_echarts {
    width: 100%;
    flex-grow: 1;
    overflow: scroll;
    padding-top: 20px;
    margin-bottom: -50px;
  }
</style>