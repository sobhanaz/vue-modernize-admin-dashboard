<script setup lang="ts">
import { computed } from 'vue';
import { getSecondary } from '@/utils/UpdateColors';
/* Chart */
const areachartOptions = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 60,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: [getSecondary.value],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.05
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

const areaChart = {
    series: [
        {
            name: '',
            data: [25, 66, 20, 40, 12, 58, 20]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-flex align-center justify-space-between">
                <v-card-title class="text-h5">Monthly Earnings</v-card-title>
                <v-btn size="large" icon variant="flat" class="bg-secondary">
                    <v-avatar size="large" class="text-white">
                        <CurrencyDollarIcon size="22" />
                    </v-avatar>
                </v-btn>
            </div>
            <v-row>
                <v-col cols="12">
                    <div class="mt-2">
                        <h3 class="text-h3">$6,820</h3>
                        <div class="mt-2 d-flex gap-2 align-center">
                            <v-avatar class="bg-lighterror text-accent" size="25">
                                <ArrowDownRightIcon size="20" />
                            </v-avatar>
                            <span class="text-subtitle-1 font-weight-bold">+9%</span>
                            <span class="text-subtitle-1 textSecondary ">last year</span>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
        <div class="mt-3 ">
            <apexchart type="area" height="60" :options="areachartOptions" :series="areaChart.series"> </apexchart>
        </div>
    </v-card>
</template>
