<template>
  <v-app id="inspire">
<!--    <v-navigation-drawer-->
<!--            v-model="drawer"-->
<!--            app-->
<!--            clipped-->
<!--    >-->
<!--      <v-list dense>-->
<!--        <v-list-item link>-->
<!--          <v-list-item-action>-->
<!--            <v-icon>mdi-map-search</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Current Situation</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->

<!--        <v-list-item link>-->
<!--          <v-list-item-action>-->
<!--            <v-icon>mdi-chart-line</v-icon>-->
<!--          </v-list-item-action>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title>Future Prediction</v-list-item-title>-->
<!--          </v-list-item-content>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->

    <v-content>
      <v-container
              fluid
              fill-height
      >
        <v-layout
                align-center
                justify-center
        >
          <v-flex shrink>
            <WorldMap/>
<!--            <Chart/>-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
    import WorldMap from "../components/WorldMap";
    // import Chart from "../components/Chart";

    export default {
        name: 'Home',
        components: {
            WorldMap
            // Chart
        },

        data: () => ({
            drawer: true,
        }),
    };
</script>
