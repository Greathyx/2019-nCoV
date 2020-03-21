<template>
  <v-app id="inspire">
    <v-app-bar
            app
            clipped-left
            clipped-right
            dark
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
        <v-tab>
          <router-link to="/about" class="link">About</router-link>
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

    <router-view/>

    <v-footer app dark>
      <span style="text-align: center; width: 100%">
        Copyright &copy; {{ new Date().getFullYear() }} <strong>CoronaVis</strong>.
        All rights reserved.
      </span>
    </v-footer>
<!--    <Footer/>-->
  </v-app>
</template>

<script>
    // import Footer from "./components/Footer";

    export default {
        name: 'App',

        components: {
            // Footer,
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
