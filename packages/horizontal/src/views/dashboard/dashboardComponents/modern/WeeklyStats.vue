<script setup lang="ts">
import { computed } from 'vue';
import { weeklyStatsData } from '@/_mockApis/components/dashboard/modernData';

import { getPrimary } from '@/utils/UpdateColors';

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            height: 135,
            type: 'area',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: [getPrimary.value],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.45,
                opacityTo: 0,
                stops: [20, 180]
            }
        },
        markers: {
            size: 0
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
        name: 'Weekly Stats',
        data: [5, 15, 5, 10, 5]
    }
];
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <v-card-title class="text-h5">Weekly Stats</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Average sales</v-card-subtitle>
            <div class="mt-7">
                <apexchart type="area" height="135" :options="chartOptions" :series="Chart"> </apexchart>
            </div>
            <div>
                <div class="d-flex align-center mt-7" v-for="list in weeklyStatsData" :key="list.title">
                    <v-avatar :class="'rounded-md bg-light' + list.bgcolor" size="40">
                        <GridDotsIcon size="18" :class="'text-' + list.textcolor" />
                    </v-avatar>
                    <div class="pl-4">
                        <h6 class="text-h6">{{ list.title }}</h6>
                        <h5 class="text-subtitle-1 textSecondary mt-1">{{ list.subtitle }}</h5>
                    </div>
                    <v-chip class="ml-auto font-weight-semibold text-subtitle-1" :color="list.bgcolor" rounded="sm" size="small">{{
                        list.rank
                    }}</v-chip>
                </div>
            </div>
        </v-card-item>
    </v-card>
</template>
