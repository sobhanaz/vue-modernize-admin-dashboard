<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary, getSecondary, getLightPrimary } from '@/utils/UpdateColors';

/* Chart */
const chartOptions = computed(() => {
    return {
        labels: ['Profit', 'Revenue', 'Expance'],
        chart: {
            height: 275,
            type: 'donut',
            foreColor: '#adb0bb',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            }
        },
        colors: [getPrimary.value, getLightPrimary.value, getSecondary.value],
        plotOptions: {
            pie: {
                donut: {
                    size: '89%',
                    background: 'transparent',

                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 7
                        },
                        value: {
                            show: false
                        },
                        total: {
                            show: true,
                            fontSize: '20px',
                            fontWeight: '600',
                            label: '$500,458'
                        }
                    }
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false
        },
        legend: {
            show: false
        },
        tooltip: {
            theme: 'dark',
            fillSeriesColor: false,
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };
});
const seriescolumnchart = [55, 55, 55];
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <v-card-title class="text-h5">Sales Overview</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Every month</v-card-subtitle>
            <apexchart class="mt-6" type="donut" height="275" :options="chartOptions" :series="seriescolumnchart"> </apexchart>
            <v-row class="mt-5">
                <v-col cols="6">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-lightprimary text-primary">
                            <GridDotsIcon size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h3 class="text-h6">$23,450</h3>
                            <h6 class="text-subtitle-1 textSecondary">Profit</h6>
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" class="d-flex justify-lg-start justify-end">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-lightsecondary text-secondary">
                            <GridDotsIcon size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h3 class="text-h6">$23,450</h3>
                            <h6 class="text-subtitle-1 textSecondary">Expance</h6>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
