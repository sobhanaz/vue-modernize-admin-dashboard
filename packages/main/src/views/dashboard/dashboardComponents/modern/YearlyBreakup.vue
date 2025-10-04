<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary, getLightPrimary } from '@/utils/UpdateColors';

/ Chart /
const chartOptions = computed(() => {
    return {
        labels: ['', '', ''],
        chart: {
            type: 'donut',
            height: 130,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            }
        },
        colors: [getPrimary.value, getLightPrimary.value, '#F9F9FD'],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                    background: 'transparent'
                }
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
        tooltip: {
            enabled: false
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        height: 140
                    }
                }
            },
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 130
                    }
                }
            }
        ]
    };
});
const Chart = [38, 40, 25];
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5">Yearly Breakup</v-card-title>
            </div>
            <v-row>
                <v-col cols="7" sm="7">
                    <div class="mt-6">
                        <h3 class="text-h3">$36,358</h3>
                        <div class="mt-2 d-flex gap-2 align-center">
                            <v-avatar class="bg-lightsuccess text-success" size="25">
                                <ArrowUpLeftIcon size="20" />
                            </v-avatar>
                            <span class="text-subtitle-1  font-weight-bold">+9%</span>
                            <span class="text-subtitle-1 textSecondary ">last year</span>
                        </div>
                        <div class="d-flex align-center mt-sm-10 mt-8">
                            <h6 class="text-subtitle-1 textSecondary">
                                <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-1" size="10" color="primary"></v-icon> 2024
                            </h6>
                            <h6 class="text-subtitle-1 textSecondary pl-5">
                                <v-icon icon="mdi mdi-checkbox-blank-circle" class="mr-1" size="10" color="lightprimary"></v-icon> 2024
                            </h6>
                        </div>
                    </div>
                </v-col>
                <v-col cols="5" sm="5">
                    <div class="d-flex align-center flex-shrink-0">
                        <apexchart class="pt-6" type="donut" height="130" :options="chartOptions" :series="Chart"> </apexchart>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>