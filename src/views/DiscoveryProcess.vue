<template>
  <v-content class="chart_container">
    <e-charts
            ref='map'
            :options='options'
            :init-options='initOptions'
            autoresize
            class="fill-height my_echart"
    />
  </v-content>
</template>

<script>
    import ECharts from '../components/ECharts.vue'
    import {genMapDiscovery} from '../data/generateECharts'

    export default {
        name: 'DiscoveryProcess',
        components: {
            ECharts,
        },

        data: () => ({
            options: {},
            initOptions: {
                renderer: 'canvas',
            }
        }),

        mounted() {
            this.options = genMapDiscovery();
        },
    };
</script>

<style>
  .chart_container {
    background-color: #E0F2F1;
  }

  .my_echart {
    width: 90%;
    height: calc(85vh);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>