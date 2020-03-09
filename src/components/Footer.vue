<template>
  <v-footer
          dark
          padless
  >
    <v-card
            flat
            tile
            class="flex teal lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
                v-for="item in icons"
                :key="item.icon"
                class="mx-4 white--text"
                icon
                v-on:click="openNewWindow(item.link)"
        >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <!--      <v-card-text class="white&#45;&#45;text pt-0">-->
      <!--        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut-->
      <!--        risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.-->
      <!--        Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices,-->
      <!--        cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque-->
      <!--        penatibus et magnis dis parturient montes, nascetur ridiculus mus.-->
      <!--      </v-card-text>-->
      <v-divider/>
      <v-card-text class="white--text">
        Copyright &copy; {{ new Date().getFullYear() }} <strong>Yuxuan Huang</strong>. All rights reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                {icon: 'fab fa-facebook', link: 'https://www.facebook.com/yuxuna.huang'},
                {icon: 'fab fa-twitter', link: 'https://twitter.com/YuxuanHuang12'},
                // {icon: 'fab fa-google-plus', link: 'https://www.facebook.com/yuxuna.huang'},
                {icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/yuxuan-huang-190927'},
                {icon: 'fab fa-instagram', link: 'https://www.instagram.com/sherley_huang/'},
            ],
        }),

        methods: {
            openNewWindow: function (link) {
                window.open(link, '_blank');
            }
        }
    }
</script>