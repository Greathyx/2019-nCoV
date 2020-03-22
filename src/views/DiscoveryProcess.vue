<template>
  <v-content class="chart_container">
    <e-charts
            ref='map'
            :options='options'
            :init-options='initOptions'
            autoresize
            style="width: 90%; margin: -10px auto 0 auto;"
            class="fill-height"
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
</style>