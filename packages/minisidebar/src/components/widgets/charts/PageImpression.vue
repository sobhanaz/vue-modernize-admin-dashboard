<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import { ArrowDownRightIcon } from 'vue-tabler-icons';
const theme = useTheme();
const secondary = theme.current.value.colors.secondary;
const lightsecondary = theme.current.value.colors.lightsecondary;

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 100,
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true
            }
        },
        colors: [lightsecondary, lightsecondary, secondary, lightsecondary, lightsecondary],

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
            data: [20, 15, 30, 25, 10]
        }
    ]
};
</script>
<template>
    <v-card elevation="10" class=" mt-6">
        <v-card-item>
            <v-card-title class="text-h5">Page Impressions</v-card-title>
            <v-row>
                <v-col cols="5">
                    <h4 class="text-h4 mt-6">$456,120</h4>
                    <h6 class="text-subtitle-2 text-medium-emphasis">(Change Yesterday)</h6>
                    <div class="pt-2">
                        <v-avatar class="bg-lighterror text-accent" size="25">
                            <ArrowDownRightIcon size="20" />
                        </v-avatar>
                        <span class="text-subtitle-1 ml-2 font-weight-bold text-medium-emphasis">+9%</span>
                    </div>
                </v-col>
                <v-col cols="7">
                    <apexchart class="" type="bar" height="100" :options="chartOptions" :series="Chart.series"> </apexchart>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
