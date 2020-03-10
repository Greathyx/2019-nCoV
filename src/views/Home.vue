<template>
  <v-app id="inspire">
    <v-content>
      <div class="fill-height box">
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
            <div style="display: flex; flex-direction: column; align-items: flex-start; padding: 0 25px">
              <p v-for="item in confirmed_data" v-bind:key="item.name">
                <span style="color: #F44336; font-weight: bold">{{item.value}}</span> {{item.name}}
              </p>
            </div>
          </div>
        </div>

        <div class="main">
          <Map/>
        </div>
      </div>
    </v-content>


  </v-app>
</template>

<script>
    import Map from "../components/Map";
    import data from '../data/data.json'
    import {getName2} from '../data/name'

    const countries = data.areaTree;
    let confirmed_data = [];

    countries.forEach(p => {
        if (getName2(p.name)) {
            confirmed_data.push({
                name: getName2(p.name),
                value: p.total.confirm
            })
        }
    });

    export default {
        name: 'Home',
        components: {
            Map
        },

        data: () => ({
            confirmed_data: confirmed_data
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
    /*max-height: calc(100vh);*/
  }
</style>