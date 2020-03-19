<template>
  <v-footer
          dark
          padless
  >
    <v-card
            flat
            tile
            class="flex teal lighten-1 white--text text-center"
    >
      <v-card-text>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Data Source: <a target="_blank" style='color:#ffffff'
                        href='https://i.snssdk.com/ugc/hotboard_fe/hot_list/template/hot_list/forum_tab.html'>
        Bytedance News</a><br/>
        API Thanks: <a target="_blank" style='color:#ffffff' href='https://github.com/canghailan/Wuhan-2019-nCoV'>
        canghailan/Wuhan-2019-nCoV</a><br/>
        Powered By <a target="_blank" style='color:#ffffff' href='https://vuejs.org'>Vue</a> &
        <a target="_blank" style='color:#ffffff' href='https://echarts.apache.org/en/index.html'>ECharts</a>
      </v-card-text>
      <v-divider/>
      <v-card-text class="white--text">
        Copyright &copy; {{ new Date().getFullYear() }} <strong>CoronaVis</strong>. All rights reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
    export default {
        data: () => ({}),
    }
</script>