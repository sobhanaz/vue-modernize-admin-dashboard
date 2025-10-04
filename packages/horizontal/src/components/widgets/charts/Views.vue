<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const secondary = theme.current.value.colors.secondary;
const lightsecondary = theme.current.value.colors.lightsecondary;

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 80,
            fontFamily: `inherit`,
            sparkline: {
                enabled: true
            }
        },
        colors: [lightsecondary, lightsecondary, secondary, lightsecondary, lightsecondary, lightsecondary],

        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: '50%',
                distributed: true,
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        grid: {
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        xaxis: {
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark'
        }
    };
});
const Chart = {
    series: [
        {
            name: '',
            data: [20, 15, 30, 25, 10, 18, 20]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <h4 class="text-h4 mt-1">15,480</h4>
            <div class="d-flex justify-space-between mt-1">
                <h6 class="text-subtitle-1 text-medium-emphasis">Views</h6>
                <h6 class="text-subtitle-1 text-error">-4.150%</h6>
            </div>
            <apexchart class="mt-6" type="bar" height="80" :options="chartOptions" :series="Chart.series"> </apexchart>
        </v-card-item>
    </v-card>
</template>
