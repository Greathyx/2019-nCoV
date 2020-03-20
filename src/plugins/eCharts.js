import Vue from 'vue';
import map from 'echarts/lib/chart/map'
import visualMap from 'echarts/lib/component/visualMap'
import title from 'echarts/lib/component/title'
import line from 'echarts/lib/chart/line'
import legend from 'echarts/lib/component/legend'
import tooltip from 'echarts/lib/component/tooltip'
import 'echarts/lib/CoordinateSystem'
//import polar from 'echarts/lib/coord/Polar'

Vue.use(map,visualMap, title, line, legend, tooltip);

export default {
    map,
    visualMap,
    title,
    line,
    legend,
    tooltip,
    //polar
}