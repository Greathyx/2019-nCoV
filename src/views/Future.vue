<template>
  <v-content style="margin-bottom: 15px">
    <v-container
            class="fill-height"
            style="margin: 15px auto"
    >
      <p>The figures below uses the basic mathematical model of infectious diseases, the SEIR model. The model assumes
        that the population is divided into four categories. SUSCEPTIBLES is a potentially infectious population.
        EXPOSED
        is a population that has been infected but not manifested. INFECTIVES are people who are infected with a virus
        and
        have shown symptoms of infection. RECOVERER is a group that has recovered. This group of people cannot be
        infected
        by others. As a fatal disease, the dead are also included.
      </p>

      <p>
        We can assume that the infectious rate, recovery rate and lethality used in the model are fixed values. We set
        <span style="font-weight: bold">the number of susceptible patients (r2)</span> that can be exposed to patients
        during the incubation period as the
        variables to be used in the model. It can be clearly seen from the images that the greater the number of
        patients that can be reached during the incubation period, the faster the development of the epidemic, the
        rising trend of the number of infected people will be more severe, and the total number of eventually infected
        people will increase. The virus has a very long incubation period. Therefore, we recommend that during the
        outbreak, although you or others do not seem to have any symptoms, you should reduce close contact with others
        and take protective measures when you go out.
      </p>

      <h4 style="width: 100%; text-align: center">Figure1: r2=70</h4>
      <e-charts
              ref='line'
              :options='options1'
              :init-options='initOptions'
              autoresize
              style="width: 100%; height: 400px; margin-bottom: 20px"
      />
      <h4 style="width: 100%; text-align: center">Figure2: r2=8</h4>
      <e-charts
              ref='line'
              :options='options2'
              :init-options='initOptions'
              autoresize
              style="width: 100%; height: 400px; margin-bottom: 20px"
      />
      <h4 style="width: 100%; text-align: center">Figure3: r2=20</h4>
      <e-charts
              ref='line'
              :options='options3'
              :init-options='initOptions'
              autoresize
              style="width: 100%; height: 400px;"
      />

      <h2>Reference</h2>
      <p>
        [1] Introduction to SEIR Models, Nakul Chitnis, Workshop on Mathematical Models of Climate Variability,
        Environmental Change and Infectious Diseases, Trieste, Italy, 2017
        <a href="http://indico.ictp.it/event/7960/session/3/contribution/19/material/slides/0.pdf"
           target="_blank"
           class="v-markdown--link v-markdown--external"
           style="text-decoration: none; color: teal"
        >
          <i class="v-icon mdi mdi-open-in-new"
             style="font-size: 15px; vertical-align: baseline;"
          ></i>
        </a>
      </p>
    </v-container>
  </v-content>
</template>

<script>
    import ECharts from '../components/ECharts.vue'
    import {generateFutureLine} from "../data/generateECharts";

    export default {
        name: 'Future',
        components: {
            ECharts,
        },

        data: () => ({
            options1: {},
            options2: {},
            options3: {},
            initOptions: {
                renderer: 'canvas',
            }
        }),

        mounted() {
            this.options1 = generateFutureLine(70);
            this.options2 = generateFutureLine(8);
            this.options3 = generateFutureLine(20);
        },
    };
</script>