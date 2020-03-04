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
      >
        <v-sheet
                :color="colors[i]"
                height="100%"
        >
          <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
          >
            <div class="display-3">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <v-row style="margin: 20px 60px">
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
    import news from '../data/newsData';

    export default {
        name: 'News',

        data: () => ({
            page: 1,
            pageLength: news.length % 12 === 0 ? news.length / 12 : news.length / 12 + 1,
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
            news: news
        }),

        methods: {
            openNews: function (link) {
                window.open(link, '_blank');
            }
        }
    };
</script>