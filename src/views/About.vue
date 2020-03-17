<template>
  <v-content>
    <v-parallax
            dark
            height="calc(95vh)"
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            class="my-parallax"
    >
      <v-row
              align="center"
              justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-bold display-4">2019-nCoV Tracking</h1>
          <h4 class="font-weight-medium title"
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
          <h1 style="margin-bottom: 5px">Our Project</h1>
          <p class="text-justify">
            1. We visualized the current data of new coronavirus break, we want to discuss
            how severe the situation is and we also want to raise people's emphasis on this epidemic.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            2. We collected news data about the
            coronavirus epidemic, we want to rainse discussions about different actions to control
            the epidemic and keep uses informed of the up-to-date information.
          </p>
          <p style="margin-top: -6px" class="text-justify">
            3. We researched the epidemic model SEIR theory, we want to raise awareness that it is
            important to do "something" to prevent the virus like wearing masks.
          </p>
        </div>
        <div class="right2">
          <v-carousel
                  cycle
                  width="715" height="390"
                  hide-delimiters
          >
            <v-carousel-item
                    width="715" height="390"
                    v-for="i in 2"
                    :key="i"
                    :src="require('../assets/about'+(i)+'.png')"
            ></v-carousel-item>
          </v-carousel>
        </div>


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
    height: calc(95vh);
  }

  .video {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(95vh);
    background: linear-gradient(teal, #C8E6C9);
  }

  .background {
    display: flex;
    padding: 100px 100px 60px 100px;
    /*height: calc(95vh);*/
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

  .right2 {
    display: flex;
    justify-content: center;
  }
</style>