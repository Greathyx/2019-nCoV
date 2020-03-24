<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <div class="fill-height sidebar">
        <div class="total" style="background-color: #FFCDD2;">
          <h1>{{total_confirmed}}</h1>
          <h4>Total Confirmed</h4>
        </div>
        <div class="total" style="background-color: #E0E0E0">
          <h1>{{total_deaths}}</h1>
          <h4>Total Deaths</h4>
        </div>
        <div class="total" style="background-color: #C8E6C9">
          <h1>{{total_cured}}</h1>
          <h4>Total Cured</h4>
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
    </v-navigation-drawer>

    <v-content>
      <div class="fill-height box">
        <Map/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
    import Map from "../components/Map";
    import data from '../data/data.json';
    import {getName, CODE} from '../data/name'

    // generate date of today
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Jan is 0
    const yyyy = today.getFullYear();
    // const today_date = yyyy + '-' + mm + '-' + dd;

    // 在北京时间 12 点前用前一天的数据替代当天数据
    // 大概还有更好的写法吧比如比较 data.json 的 md5 ……
    if(today.getHours()<5){
        var today_date=yyyy+'-'+mm+'-'+(dd-1)
    }else{
        today_date = yyyy + '-' + mm + '-' + dd;
    }

    let confirmed_data = [];
    let total_confirmed = 0;
    let total_cured = 0;
    let total_deaths = 0;
    for (let code of CODE) {
        let temp = data.filter(e => e.countryCode === code && e.date === today_date && !e.province);
        temp.forEach(() => {
            confirmed_data.push({
                name: getName(code),
                value: temp[0].confirmed
            });
            total_confirmed += temp[0].confirmed;
            total_cured += temp[0].cured;
            total_deaths += temp[0].dead;
        });
        confirmed_data.sort((a, b) => {
            return b.value - a.value;
        })
    }

    export default {
        name: 'Home',
        components: {
            Map
        },

        data: () => ({
            drawer: null,
            confirmed_data: confirmed_data,
            total_confirmed: total_confirmed,
            total_cured: total_cured,
            total_deaths: total_deaths,
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
    margin-bottom: 30px;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    flex-basis: 250px;
    min-width: 250px; /*确保当页面很小的时候，左侧变小*/
    flex-grow: 0;
    justify-content: center;
    align-items: center;
    padding: 8px;
    text-align: center
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
  }
</style>