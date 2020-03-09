<template>
  <v-app id="inspire">
    <v-content>
      <div class="box">
        <div class="fill-height sidebar">
          <div class="total" style="background-color: #FFCDD2">
            <h1>111,362</h1>
            <h4>Total Confirmed</h4>
          </div>
          <div class="total" style="background-color: #E0E0E0">
            <h1>3,892</h1>
            <h4>Total Deaths</h4>
          </div>
          <div class="total" style="background-color: #C8E6C9">
            <h1>62,392</h1>
            <h4>Total Recovered</h4>
          </div>
          <div class="countries">
            <h5 style="margin: 10px auto">Confirmed Cases by Country</h5>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar1</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
            <p>sidebar2</p>
          </div>
        </div>

        <div class="main">
          <WorldMap/>
        </div>
      </div>
    </v-content>
  </v-app>
</template>

<script>
    // import Map from "../components/Map";
    import WorldMap from "../components/WorldMap";
    // import Chart from "../components/Chart";

    export default {
        name: 'Home',
        components: {
            WorldMap,
            // Map
            // Chart
        },

        data: () => ({
            items: [
                {title: 'Home', icon: 'mdi-home-city'},
                {title: 'My Account', icon: 'mdi-account'},
                {title: 'Users', icon: 'mdi-account-group-outline'},
            ],
        }),
    };
</script>

<style>
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    flex-basis: 250px;
    min-width: 250px; /*确保当页面很小的时候，左侧变小*/
    flex-grow: 0;
    justify-content: center;
    align-items: center;
  }

  .main {
    flex-grow: 1;
  }

  .total {
    height: 80px;
    width: 100%;
    flex-grow: 0;
    margin-bottom: 6px;
  }

  .countries {
    width: 100%;
    background-color: bisque;
    flex-grow: 1;
    overflow: scroll;
    max-height: calc(70vh);
  }
</style>