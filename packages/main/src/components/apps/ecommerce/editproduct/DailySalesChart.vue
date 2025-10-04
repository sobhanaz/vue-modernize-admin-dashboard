<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
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
        colors: [primary, primary, primary, primary, primary, primary],

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
            categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
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
    <v-card elevation="10" class="mb-6">
        <v-card-item>
            <div class="d-flex justify-space-between align-end">
                <div>
                    <v-card-title class="text-h5">$2,420</v-card-title>
                    <v-card-subtitle class="text-subtitle-1 pb-0"> Average Daily Sales</v-card-subtitle>
                </div>
                <v-chip color="success" size="small" class="text-white rounded-sm">2.6%</v-chip>
            </div>
            <div class="mx-n1">
                <apexchart class="mt-6" type="bar" height="80" :options="chartOptions" :series="Chart.series"> </apexchart>
            </div>
        </v-card-item>
    </v-card>
</template>
