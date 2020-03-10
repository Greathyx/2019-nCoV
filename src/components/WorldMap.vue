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
    import data from '../data/data.json'
    import {getName, getAbbr, getId} from '../data/name'

    const countries = data.areaTree;
    let country_data = [];

    countries.forEach(p => {
        if (getName(p.name)) {
            country_data.push({
                "id": getId(p.name),
                "FontSize": "12",
                "FontColor": "#383838",
                "FontBold": "1",
                "value": p.total.confirm,
                "showLabel": "1",
                "useSNameInLabels": "1",
                "link": "newchart-json-" + getAbbr(p.name),
            })
        }
    });

    // 获取当前日期
    const date = new Date();
    // 获取当前月份
    let nowMonth = date.getMonth() + 1;
    // 获取当前是几号
    let strDate = date.getDate();
    // 添加分隔符“-”
    let seperator = ".";
    // 对月份进行处理，1-9月在前面添加一个“0”
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
    }
    // 对月份进行处理，1-9号在前面添加一个“0”
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    // 最后拼接字符串，得到一个格式为(yyyy-MM-dd)的日期
    const nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;

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
                        "caption": "Current World-wide Confirmed Infection Situation",
                        "subcaption": "confirmed by " + nowDate,
                        "includevalueinlabels": "1",
                        "labelsepchar": ": ",
                        "legendposition": "bottom",
                        // "entitytooltext": "$lname: <b>$datavalue </b>confirmed",
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
                                "maxvalue": "1000",
                                "color": "#F4511E"
                            },
                            {
                                "minvalue": "1000",
                                "maxvalue": "100000",
                                "color": "#BF360C"
                            }
                        ]
                    },
                    "data": country_data,
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