<template>
  <v-container fluid style="margin: 0 200px">
    <h1>Future trend of infection numbers we want to see...</h1>

    <v-sparkline
            :value="value"
            :gradient="gradient"
            :smooth="radius || false"
            :padding="padding"
            :line-width="lineWidth"
            stroke-linecap="round"
            :gradient-direction="gradientDirection"
            :fill="fill"
            :type="type"
            :auto-line-width="autoLineWidth"
            auto-draw
            :show-labels="showLabels"
            :label-size="labelSize"
    >
      <template v-slot:label="item">
        {{ item.value }}
      </template>
    </v-sparkline>
  </v-container>
</template>

<script>
    const gradients = [
        ['#222'],
        ['#42b3f4'],
        ['red', 'orange', 'yellow'],
        ['purple', 'violet'],
        ['#00c6ff', '#F0F', '#FF0'],
        ['#f72047', '#ffd200', '#1feaea'],
    ];

    export default {
        name: 'Future',
        components: {
        },

        data: () => ({
            showLabels: false,
            lineWidth: 2,
            labelSize: 6,
            radius: 10,
            padding: 10,
            lineCap: 'round',
            gradient: gradients[5],
            value: [73451, 51023, 36902, 29024, 20124, 13352, 9520, 6213],
            gradientDirection: 'top',
            gradients,
            fill: false,
            type: 'trend',
            autoLineWidth: false,
        }),
    };
</script>