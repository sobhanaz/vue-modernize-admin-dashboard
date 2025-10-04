<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';
/* Chart Color */
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const lightprimary = theme.current.value.colors.lightprimary;
const secondary = theme.current.value.colors.secondary;
/* Chart 1 */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 200,
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            stacked: true,
            sparkline: {
                enabled: true
            }
        },
        colors: [primary, primary],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '20%',
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
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            theme: 'light'
        }
    };
});
const Chart = [
    {
        name: '',
        data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5]
    },
    {
        name: '',
        data: [-2.8, -1.1, -3.0, -1.5, -1.9, -2.8]
    }
];

/* Chart 2 */
const chartOptions2 = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 200,
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            stacked: true,
            sparkline: {
                enabled: true
            }
        },
        colors: [secondary, secondary],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: '60%',
                columnWidth: '20%',
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
            show: false,
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        yaxis: {
            min: -5,
            max: 5,
            tickAmount: 4
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            axisTicks: {
                show: false
            }
        },
        tooltip: {
            theme: 'light'
        }
    };
});
const Chart2 = [
    {
        name: '',
        data: [2.5, 3.7, 3.2, 2.6, 1.9, 2.5]
    },
    {
        name: '',
        data: [-2.8, -1.1, -3.0, -1.5, -1.9, -2.8]
    }
];

/* Chart 3 */
const chartOptions3 = computed(() => {
    return {
        chart: {
            type: 'donut',
            height: 180,
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            stacked: true,
            sparkline: {
                enabled: true
            }
        },
        labels: ['Income', 'Current', 'Expance'],
        colors: [primary, lightprimary, secondary],
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
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
                            label: '$98,260'
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
        }
    };
});
const Chart3 = [55,55,55];

</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-flex align-center justify-space-between">
                <v-card-title class="text-h5">Current Value</v-card-title>
                <div class="">
                    <v-btn color="primary" flat>buy</v-btn>
                    <v-btn color="primary" variant="outlined" flat class="ml-2">sell</v-btn>
                </div>
            </div>
            <v-row class="mt-4 mb-1">
                <!--Income Chart-->
                <v-col cols="12" sm="4">
                    <v-card elevation="10" >
                        <v-card-item>
                            <apexchart type="bar" height="200" :options="chartOptions" :series="Chart"> </apexchart>
                            <h6 class="text-h6 font-weight-medium">Income</h6>
                            <div class="d-flex align-center justify-space-between mt-1">
                                <h4 class="text-h4">$25,260</h4>
                                <h6 class="text-subtitle-1 text-success">+1.25%</h6>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
                <!--Expence Chart-->
                <v-col cols="12" sm="4">
                    <v-card elevation="10" >
                        <v-card-item>
                            <apexchart type="bar" height="200" :options="chartOptions2" :series="Chart2"> </apexchart>
                            <h6 class="text-h6 font-weight-medium">Expance</h6>
                            <div class="d-flex align-center justify-space-between mt-1">
                                <h4 class="text-h4">$12,260</h4>
                                <h6 class="text-subtitle-1 text-success">+4.25%</h6>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
                <!--Current Year Chart-->
                <v-col cols="12" sm="4">
                    <v-card elevation="10" >
                        <v-card-item>
                            <apexchart class="mb-5" type="donut" height="180" :options="chartOptions3" :series="Chart3"> </apexchart>
                            <h6 class="text-h6 font-weight-medium">Expance</h6>
                            <div class="d-flex align-center justify-space-between mt-1">
                                <h4 class="text-h4">$98,260</h4>
                                <h6 class="text-subtitle-1 text-success">+2.5%</h6>
                            </div>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
