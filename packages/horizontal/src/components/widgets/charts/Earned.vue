<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 90,
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            sparkline: {
                enabled: true
            }
        },
        colors: [primary],
        stroke: {
            curve: 'straight',
            width: 2
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
        xaxis: {
            axisBorder: {
                show: true
            },
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            theme: 'light'
        }
    };
});
const Chart = {
    series: [
        {
            name: '',
            data: [0, 3, 1, 2, 8, 1, 5, 1]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <h4 class="text-h4 mt-1">2,545</h4>
            <div class="d-flex justify-space-between mt-1">
                <h6 class="text-subtitle-1 text-medium-emphasis">Earned</h6>
                <h6 class="text-subtitle-1 text-success">+1.20%</h6>
            </div>
        </v-card-item>
        <apexchart class="mt-3" type="area" height="90" :options="chartOptions" :series="Chart.series"> </apexchart>
    </v-card>
</template>
