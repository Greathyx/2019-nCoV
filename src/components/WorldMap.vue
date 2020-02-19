<template>
  <div id="chart-container">
    <fusioncharts
            :type="type"
            :width="width"
            :height="height"
            :dataFormat="dataFormat"
            :dataSource="dataSource"
            ref="fc"
    ></fusioncharts>
  </div>
</template>

<script>
    import worldMapData from '../data/worldMapData';

    export default {
        data() {
            return {
                type: "worldwithcountries",
                renderAt: "chart-container",
                width: "1100",
                height: "700",
                dataFormat: "json",
                dataSource: worldMapData,
            }
        },
        methods: {
            configureLink: function (chart) {
                this.chartInstance = chart; // Save it for further use

                // Configure Drilldown attributes
                this.chartInstance.configureLink({
                    type: "column2d",
                    width: "800",
                    height: "600",
                    overlayButton: {
                        message: 'Back',
                        fontColor: '#333333',
                        bgColor: '#fef2f3',
                        borderColor: '#333333',
                    }
                }, 0)
            }
        },
        mounted: function () {
            // this.$refs.fc gets the vue-fusionchart component
            this.configureLink(this.$refs.fc.chartObj);
        }
    };
</script>