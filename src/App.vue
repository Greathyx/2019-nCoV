<template>
  <v-app id="inspire">
    <!--    <v-navigation-drawer-->
    <!--            v-model="drawer"-->
    <!--            app-->
    <!--            clipped-->
    <!--            :mini-variant="miniVariant"-->
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

    <v-app-bar
            app
            clipped-left
    >
      <!--      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant"></v-app-bar-nav-icon>-->
      <v-toolbar-title style="width: 240px">2019-nCoV Tracking</v-toolbar-title>
      <v-tabs color="teal" id="tab">
        <v-tab>
          <router-link to="/" class="link">Home</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/news" class="link">News</router-link>
        </v-tab>
        <v-tab>
          <router-link to="/future" class="link">Future</router-link>
        </v-tab>
      </v-tabs>
<!--      <v-spacer/>-->
<!--      <v-switch-->
<!--              v-model="$vuetify.theme.dark"-->
<!--              primary-->
<!--              label="Dark"-->
<!--              hide-details-->
<!--      />-->
    </v-app-bar>

    <v-content>
      <v-container
              class="fill-height"
              fluid
              style="padding: 0"
      >
<!--        <v-row-->
<!--                align="center"-->
<!--                justify="center"-->
<!--        >-->
          <router-view/>
<!--        </v-row>-->
      </v-container>
    </v-content>

    <Footer/>
  </v-app>
</template>

<script>
    // import HelloWorld from './components/HelloWorld';
    import Footer from "./components/Footer";

    export default {
        name: 'App',

        components: {
            // HelloWorld,
            Footer,
        },

        data: () => ({
            drawer: true,
            miniVariant: true,
        }),

        created() {
            this.$vuetify.theme.dark = false
        },
    };
</script>

<style>
  #tab a {
    /*font-weight: bold;*/
    text-decoration: none;
    color: inherit;
  }

  #tab a.router-link-exact-active {
    text-decoration: none;
    color: inherit;
  }

  .link {
    height: 64px;
    align-items: center;
    display: flex;
    /*font-size: 1rem;*/
    font-size: 0.875rem;
  }
</style>
