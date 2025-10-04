<script setup lang="ts">
import { computed } from 'vue';

import { getPrimary, getLight100 } from '@/utils/UpdateColors';

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            height: 275,
            type: 'bar',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            }
        },
        colors: [getLight100.value, getLight100.value, getPrimary.value, getLight100.value, getLight100.value, getLight100.value],
        plotOptions: {
            bar: {
                borderRadius: 4,
                columnWidth: '45%',
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
            yaxis: {
                lines: {
                    show: false
                }
            }
        },
        xaxis: {
            categories: [['Apr'], ['May'], ['June'], ['July'], ['Aug'], ['Sept']],
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            labels: {
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
const Chart = {
    series: [
        {
            name: '',
            data: [20, 15, 30, 25, 10, 15]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <v-card-title class="text-h5">Yearly Sales</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Total Sales</v-card-subtitle>
            <apexchart type="bar" height="275" :options="chartOptions" :series="Chart.series"> </apexchart>
            <v-row class="mt-1">
                <v-col cols="6">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-lightprimary text-primary">
                            <GridDotsIcon size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h6 class="text-subtitle-1 textSecondary">Salary</h6>
                            <h3 class="text-h6">$36,358</h3>
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" class="d-flex justify-lg-start justify-end">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-grey100 textSecondary">
                            <GridDotsIcon size="22" class="text-medium-emphasis" />
                        </v-avatar>
                        <div class="pl-4">
                            <h6 class="text-subtitle-1 textSecondary">Expance</h6>
                            <h3 class="text-h6">$5,296</h3>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
