<!--<template>-->
<!--  <v-app>-->
<!--    <v-app-bar-->
<!--      app-->
<!--      color="primary"-->
<!--      dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->

<!--        <v-img-->
<!--          alt="Vuetify Name"-->
<!--          class="shrink mt-1 hidden-sm-and-down"-->
<!--          contain-->
<!--          min-width="100"-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"-->
<!--          width="100"-->
<!--        />-->
<!--      </div>-->

<!--      <v-spacer></v-spacer>-->

<!--      <v-btn-->
<!--        href="https://github.com/vuetifyjs/vuetify/releases/latest"-->
<!--        target="_blank"-->
<!--        text-->
<!--      >-->
<!--        <span class="mr-2">Latest Release</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
<!--    </v-app-bar>-->

<!--    <v-content>-->
<!--      <HelloWorld/>-->
<!--    </v-content>-->
<!--  </v-app>-->
<!--</template>-->

<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            :mini-variant="miniVariant"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-map-search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Current Situation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-chart-line</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Future Prediction</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="miniVariant = !miniVariant"></v-app-bar-nav-icon>
      <v-toolbar-title>2019-nCoV Tracking</v-toolbar-title>
      <v-spacer/>
      <v-switch
              v-model="$vuetify.theme.dark"
              primary
              label="Dark"
              hide-details
      />
    </v-app-bar>

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
          </v-flex>
        </v-layout>
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
