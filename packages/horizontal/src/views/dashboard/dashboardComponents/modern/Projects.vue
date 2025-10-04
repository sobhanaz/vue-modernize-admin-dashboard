<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 80,
            fontFamily: `inherit`,
            offsetX: -5,
            resize: true,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        colors: [getPrimary.value, getSecondary.value],
        grid: {
            show: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                startingShape: 'flat',
                endingShape: 'flat',
                columnWidth: '60%',
                barHeight: '20%',
                borderRadius: 2
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2.5,
            colors: ['rgba(0,0,0,0.01)']
        },
        xaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            }
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        axisBorder: {
            show: false
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            }
        }
    };
});
const Chart = [
    {
        name: '',
        data: [4, 10, 9, 7, 9, 10, 11, 8, 10]
    }
];
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <h6 class="text-subtitle-1 textSecondary">Projects</h6>
            <h4 class="text-h4 mt-1">78,298</h4>
            <div class="pt-2">
                <v-avatar class="bg-lightsuccess text-success" size="25">
                    <ArrowUpLeftIcon size="20" />
                </v-avatar>
                <span class="text-subtitle-1 ml-2 font-weight-bold">+9%</span>
            </div>
            <apexchart class="" type="bar" height="80" :options="chartOptions" :series="Chart"> </apexchart>
        </v-card-item>
    </v-card>
</template>
