<template>
  <v-app id="inspire">
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
            <Map/>
<!--            <Chart/>-->
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
    import Map from "../components/Map";
    // import Chart from "../components/Chart";

    export default {
        name: 'Home',
        components: {
            Map
            // Chart
        },

        data: () => ({
        }),
    };
</script>
