<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const secondary = theme.current.value.colors.secondary;
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 55,
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        colors: [secondary],
        grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        barHeight: '18%',
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ['rgba(0,0,0,0.01)'],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            }
        }
    };
});
const seriescolumnchart = [
    {
      name: 'projects',
      data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
    },
  ];
</script>
<template>
   <v-card elevation="10" >
        <v-card-item>
            <h6 class="text-subtitle-1 text-medium-emphasis">Total Earning</h6>
            <h4 class="text-h4 mt-1">$78,298</h4>
            <apexchart class="mt-sm-13 mt-10" type="bar" height="55" :options="chartOptions" :series="seriescolumnchart"> </apexchart>
        </v-card-item>
    </v-card>
</template>
