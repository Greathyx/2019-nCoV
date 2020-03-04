<template>
  <v-container
          class="fill-height"
          fluid
          style="min-height: 434px; padding: 0"
  >
    <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
    >
      <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :src="require('../assets/Carousel'+(i+1)+'.png')"
              v-on:click="openNews(slide.href)"
      >
        <v-sheet
                class="carousel_item"
                height="100%"
                tile
                style="background-color: hsla(0,0%,0%,0.3)"
        >
          <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
          >
            <div class="display-3">{{slide.title}}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-col class="d-flex" style="margin: 20px 60px -20px 60px;" cols="12" md="3" sm="6">
      <v-select
              :items="selects"
              v-model="selectVal"
              label="Sort by time"
              color="teal"
              outlined
              dense
              @change="sortByDate()"
      ></v-select>
    </v-col>

    <v-row style="margin: 0px 60px 20px 60px">
      <v-col cols="3" v-for="item in news.slice((page - 1) * 12, page * 12)" v-bind:key="item.title">
        <v-card
                hover
                height="334px"
                v-on:click="openNews(item.link)"
        >
          <v-img
                  :src=item.picSrc
                  height="160"
                  class="grey darken-4"
          ></v-img>
          <v-card-title>
            {{item.title.length > 55 ? item.title.substring(0, 52) + "..." : item.title}}
          </v-card-title>
          <v-card-subtitle>
            {{item.subtitle.length > 75 ? item.subtitle.substring(0, 72) + "..." : item.subtitle}}
          </v-card-subtitle>
          <v-card-text style="padding: 0 16px 0 16px">
            <p style="margin-bottom: 0">{{item.date}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-pagination
            v-model="page"
            :length=pageLength
            :total-visible="7"
            style="margin-bottom: 20px"
    ></v-pagination>
  </v-container>
</template>

<script>
    import newsData from '../data/newsData';

    let news = [];
    news = newsData.reverse();

    export default {
        name: 'News',

        data: () => ({
            page: 1,
            pageLength: news.length % 12 === 0 ? news.length / 12 : news.length / 12 + 1,
            selects: ['New to old', 'Old to new'],
            selectVal:'New to old',
            slides: [
                {
                    title: "Protective measures against 2019-nCoV",
                    href: "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
                },
                {
                    href: 'https://experience.arcgis.com/experience/685d0ace521648f8a5beeeee1b9125cd',
                    title: 'WHO Situation Dashboard'
                },
                {
                    href: 'https://www.cnbc.com/2020/03/04/italys-death-toll-from-the-coronavirus-is-now-worse-than-iran.html',
                    title: 'Italy closes all schools for 2 weeks'
                },
                {
                    href: 'https://www.aftonbladet.se/nyheter/a/3Jgxj9/senaste-nytt-om-coronaviruset',
                    title: 'The spread of the coronavirus in Sweden'
                },
            ],
            news: news
        }),

        methods: {
            openNews: function (link) {
                window.open(link, '_blank');
            },

            sortByDate: function () {
                news = news.reverse();
            }
        }
    };
</script>

<style>
  .carousel_item:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>