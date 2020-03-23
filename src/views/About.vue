<template>
  <v-content>
    <v-parallax
            dark
            height="calc(90vh)"
            :src="require('../assets/material2.jpg')"
            class="my-parallax"
    >
      <v-row
              align="center"
              justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-bold display-4">2019-nCoV Tracking</h1>
          <h4 class="font-weight-medium headline"
              style="margin-top: 20px">
            The World-wide Epidemic
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <div class="video">
      <h3 class="display-1 font-weight-medium" style="color: white">Introduction Video</h3>
      <iframe width="600" height="360"
              src="https://www.youtube.com/embed/5iA-0nn8qAM" frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              style="margin-top: 20px"
              allowfullscreen
      ></iframe>
    </div>

    <div style="margin: 0 60px">
      <div class="background">
        <div class="left">
          <iframe width="715" height="405" src="https://www.youtube.com/embed/mOV1aBVYKGA"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
          ></iframe>
        </div>
        <div class="right">
          <h1 style="margin-bottom: 5px">Background</h1>
          <p class="text-justify">
            On 31 December 2019, the WHO China Country Office was informed of cases of pneumonia
            unknown etiology (unknown cause) detected in Wuhan City, Hubei Province of China. From
            then on, more and more countries and areas in the world are being affected by this virus
            outbreak.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            The program aims to develop a visualization system based on data collected
            about this epidemic and provoke people's attention.
          </p>
        </div>
      </div>

      <div class="project">
        <div class="left2">
          <h1 style="margin-bottom: 5px">
            Our Project
            <a href="/"
               class="v-markdown--link v-markdown--external"
               style="text-decoration: none; color: teal"
            >
              <i class="v-icon mdi mdi-open-in-new"
                 style="font-size: 20px; vertical-align: baseline;"
              ></i>
            </a>
          </h1>
          <p class="text-justify">
            1. By visualizing the current data of the new coronavirus break, we want to discuss
            how severe the situation is and to raise people's emphasis on this epidemic.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            2. We built a dynamic map with a timeline to demonstrate how situation got more and
            more severe in the last several months.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            3. We collected news data about the
            coronavirus epidemic to keep users informed of the up-to-date information
            and to raise discussions about different actions to control the epidemic.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            4. Via researching the epidemic model named SEIR, we hope to make people awared
            that it is crucial to take preventions like wearing masks.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            * Data Source:
            <a target="_blank" style="color: teal"
               href='https://i.snssdk.com/ugc/hotboard_fe/hot_list/template/hot_list/forum_tab.html'>
              Bytedance News
              <i class="v-icon mdi mdi-open-in-new"
                 style="font-size: 15px; vertical-align: baseline;"
              />
            </a>.<br/>
            * API Thanks:
            <a target="_blank" href='https://github.com/canghailan/Wuhan-2019-nCoV'
               style="color: teal"
            >
              canghailan/Wuhan-2019-nCoV
              <i class="v-icon mdi mdi-open-in-new"
                 style="font-size: 15px; vertical-align: baseline;"
              />
            </a>.<br/>
            * Powered By:
            <a target="_blank" href='https://vuejs.org' style="color: teal">
              Vue
              <i class="v-icon mdi mdi-open-in-new"
                 style="font-size: 15px; vertical-align: baseline;"
              />
            </a>
            &
            <a target="_blank" href='https://echarts.apache.org/en/index.html' style="color: teal">
              ECharts
              <i class="v-icon mdi mdi-open-in-new"
                 style="font-size: 15px; vertical-align: baseline;"
              />
            </a>
          </p>
        </div>
        <div class="right2">
          <v-carousel
                  cycle
                  width="700" height="440"
                  hide-delimiters
          >
            <v-carousel-item
                    width="700" height="440"
                    :src="require('../assets/about0.png')"
            ></v-carousel-item>
            <v-carousel-item
                    width="700" height="440"
                    :src="require('../assets/about1.png')"
            ></v-carousel-item>
            <v-carousel-item
                    width="700" height="440"
                    :src="require('../assets/about2.png')"
            ></v-carousel-item>
            <v-carousel-item
                    width="700" height="440"
                    :src="require('../assets/about3.png')"
            ></v-carousel-item>
          </v-carousel>
        </div>
      </div>

      <div class="objectives">
        <h1 style="margin-bottom: 20px; text-align: center">Learning Objectives Reached</h1>
        <div>
          <p style="margin-top: -6px">
            1. We cooperated and worked independently and created an information visualization
            system with certain functions. The data is displayed through interactive data conversion
            and visual mapping.
          </p>
          <p style="margin-top: -6px">
            2. According to the data form and content, we have selected a visualization form
            suitable for the data.
          </p>
          <p style="margin-top: -6px">
            3. We browsed other online visualization sites, gave them feedback, and applied
            what we learned to our system.
          </p>
          <p style="margin-top: -6px">
            4. Our system takes into account a wide range of user groups and strives to make
            them easy to use.
          </p>
          <p style="margin-top: -6px">
            5. We conducted user interviews and other evaluation methods and obtained
            constructive criticism from users.
          </p>
        </div>
      </div>

      <div class="members_intro">
        <h1 style="margin-bottom: 5px">Our Team</h1>
        <v-row>
          <v-col cols="4">
            <v-card class="mx-auto" max-width="300" height="400px">
              <v-img
                      :src="require('../assets/yuxuanh.jpg')"
                      height="200px"
              ></v-img>
              <v-card-title>Yuxuan Huang</v-card-title>
              <v-card-subtitle>
                • cook data<br/>
                • design the architecture of the website<br/>
                • front-end programming<br/>
                • deploy the website<br/>
                • design visual structures<br/>
                • make presentation ppts<br/>
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card class="mx-auto" max-width="300" height="400px">
              <v-img
                      :src="require('../assets/jiamengb.jpg')"
                      height="200px"
              ></v-img>
              <v-card-title>Jiameng Bian</v-card-title>
              <v-card-subtitle>
                • crawl data and cook data<br/>
                • front-end programming<br/>
                • design visual structures<br/>
                • make presentation ppts<br/>
              </v-card-subtitle>
            </v-card>
          </v-col>

          <v-col cols="4">
            <v-card class="mx-auto" max-width="300" height="400px">
              <v-img
                      :src="require('../assets/chenhaol.jpg')"
                      height="200px"
              ></v-img>
              <v-card-title>Chenhao Li</v-card-title>
              <v-card-subtitle>
                • collect news data<br/>
                • research the SEIR theory and build it<br/>
                • carry out evaluation tests<br/>
                • make the demo video<br/>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-content>
</template>

<script>
    export default {
        name: 'About',
    };
</script>

<style>
  .my-parallax {
    height: calc(90vh);
  }

  .video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(90vh);
    background: linear-gradient(teal, #E0F2F1);
  }

  .background {
    display: flex;
    padding: 100px 100px 60px 100px;
  }

  .left {
    display: flex;
    align-items: center;
    margin-right: 60px;
  }

  .right {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .project {
    display: flex;
    padding: 0 100px 60px 100px;
  }

  .left2 {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    margin-right: 60px;
  }

  .left2 a {
    text-decoration-line: none;
    color: teal;
  }

  .right2 {
    display: flex;
    justify-content: center;
  }

  .objectives {
    padding: 0 100px 60px 100px;
  }

  .members_intro {
    padding: 0 100px 90px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>