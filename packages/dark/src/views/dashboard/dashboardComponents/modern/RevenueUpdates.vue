<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';

const select = ref('March 2024');
const items = ref(['March 2024', 'April 2024', 'May 2024']);

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            height: 375,
            type: 'bar',
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            stacked: true
        },
        colors: [getPrimary.value, getSecondary.value],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '18%',
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
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08'],
            axisBorder: {
                show: false
            }
        },
        tooltip: {
            theme: 'dark',
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        },
        responsive: [
            {
                breakpoint: 991,
                options: {
                    xaxis: {
                        labels: {
                            rotate: -45
                        },
                        categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08']
                    }
                }
            }
        ]
    };
});
const lineChart = {
    series: [
        {
            name: 'Eanings this month',
            data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0]
        },
        {
            name: 'Expense this month',
            data: [-1.5, -1.1, -2.5, -1.5, -0.6, -1.8]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <div>
                    <v-card-title class="text-h5">Revenue Updates</v-card-title>
                    <v-card-subtitle class="text-subtitle-1 textSecondary">Overview of Profit</v-card-subtitle>
                </div>
                <div class="my-sm-0 my-2">
                    <v-select v-model="select" :items="items" variant="outlined" density="compact" hide-details></v-select>
                </div>
            </div>

            <v-row>
                <v-col cols="12" sm="8" class="pt-7">
                    <apexchart type="bar" height="375" :options="chartOptions" :series="lineChart.series"> </apexchart>
                </v-col>
                <v-col cols="12" sm="4" class="pt-7">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-lightprimary text-primary">
                            <GridDotsIcon size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h3 class="text-h3">$63,489.50</h3>
                            <h6 class="text-subtitle-1 textSecondary">Total Earnings</h6>
                        </div>
                    </div>
                    <div class="mt-sm-10 mb-sm-10 mt-10 mb-0">
                        <div class="d-flex align-baseline">
                            <v-icon icon="mdi mdi-checkbox-blank-circle" size="10" color="primary"></v-icon>
                            <div class="pl-4">
                                <h6 class="text-subtitle-1 textSecondary">Earnings this month</h6>
                                <h5 class="text-h5 mt-1">$48,820</h5>
                            </div>
                        </div>
                        <div class="d-flex mt-8 align-baseline">
                            <v-icon icon="mdi mdi-checkbox-blank-circle" size="10" color="secondary"></v-icon>
                            <div class="pl-4">
                                <h6 class="text-subtitle-1 textSecondary">Expense this month</h6>
                                <h5 class="text-h5 mt-1">$26,498</h5>
                            </div>
                        </div>
                        <v-btn color="primary" class="mt-10" variant="flat" block>View Full Report</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
