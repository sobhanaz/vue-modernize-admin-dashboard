<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';

const select = ref('March 2024');
const items = ref(['March 2024', 'April 2024', 'May 2024']);

const chartOptions = computed(() => {
    return {
        chart: {
            height: 320,
            type: 'bar',
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            toolbar: {
                show: false
            },
            offsetX: -20,
            stacked: true
        },
        colors: [getPrimary.value, getSecondary.value],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '20%',
                borderRadius: [6],
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all'
            }
        },
        stroke: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: false
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark',
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };
});
const seriescolumnchart = [
    {
        name: 'Modernize',
        data: [2.5, 3.7, 3.2, 2.6, 1.9]
    },
    {
        name: 'Spike',
        data: [-2.8, -1.1, -3.0, -1.5, -1.9]
    }
];
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <v-card-title class="text-h5">Revenue Updates</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Overview of Profit</v-card-subtitle>
            <div class="d-flex align-center mt-6">
                <h6 class="text-subtitle-2 textSecondary d-flex align-center">
                    <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="primary"></v-icon> Footware
                </h6>
                <h6 class="text-subtitle-2 textSecondary pl-5 d-flex align-center">
                    <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-2" size="10" color="secondary"></v-icon> Fashionware
                </h6>
            </div>
            <apexchart class="pt-1 revenuechart" type="bar" height="320" :options="chartOptions" :series="seriescolumnchart"> </apexchart>
        </v-card-item>
    </v-card>
</template>


<style type="text/css">
.revenuechart .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path {
  clip-path: inset(0 0 5% 0 round 20px);
}
</style>