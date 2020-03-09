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
                width: "100%",
                height: "90%",
                dataFormat: "json",
                dataSource: {
                    "chart": {
                        "caption": "Current World-wide Infection Situation",
                        "subcaption": "confirmed by 2020.02.19",
                        "includevalueinlabels": "1",
                        "labelsepchar": ": ",
                        "legendposition": "bottom",
                        "entitytooltext": "$lname: <b>$datavalue </b>confirmed",
                        "entityFillHoverColor": "#FFF9C4",
                        "theme": "fusion",
                        "nullEntityColor": "#C2C2D6",
                        "nullEntityAlpha": "50",
                        "hoverOnNull": "0"
                    },
                    "colorrange": {
                        "gradient": "0",
                        "color": [
                            {
                                "minvalue": "1",
                                "maxvalue": "10",
                                "color": "#FFCCBC"
                            },
                            {
                                "minvalue": "10",
                                "maxvalue": "50",
                                "color": "#FFAB91"
                            },
                            {
                                "minvalue": "50",
                                "maxvalue": "100",
                                "color": "#F4511E"
                            },
                            {
                                "minvalue": "10000",
                                "maxvalue": "100000",
                                "color": "#BF360C"
                            }
                        ]
                    },
                    "data": worldMapData.data,
                    "linkeddata": worldMapData.linkeddata
                },
            }
        },
        methods: {
            configureLink: function (chart) {
                this.chartInstance = chart; // Save it for further use

                // Configure Drilldown attributes
                this.chartInstance.configureLink({
                    type: "column2d",
                    width: "80%",
                    height: "80%",
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