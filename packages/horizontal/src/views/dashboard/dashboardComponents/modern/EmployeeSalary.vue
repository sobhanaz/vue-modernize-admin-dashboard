<script setup lang="ts">
import { computed } from 'vue';
import { getPrimary, getLight100 } from '@/utils/UpdateColors';

/*Chart*/
const chartOptions = computed(() => {
    return {
        chart: {
            height: 275,
            type: 'bar',
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            toolbar: {
                show: false
            }
        },
        colors: [getLight100.value, getLight100.value, getPrimary.value, getLight100.value, getLight100.value, getLight100.value],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
                borderRadius:4, 
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
            <v-card-title class="text-h5">Employee Salary</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Every month</v-card-subtitle>
            <apexchart type="bar" height="275" :options="chartOptions" :series="Chart.series"> </apexchart>
            <v-row>
                <v-col cols="6" sm="6" class="d-flex">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-lightprimary text-primary">
                            <GridDotsIcon size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h6 class="text-subtitle-1 textSecondary mb-1">Salary</h6>
                            <h3 class="text-h6">$36,358</h3>
                        </div>
                    </div>
                </v-col>
                <v-col cols="6" sm="6" class="d-flex justify-lg-start justify-end">
                    <div class="d-flex align-center mt-md-6 mt-3">
                        <v-avatar class="rounded-md bg-lightsecondary text-secondary">
                            <GridDotsIcon size="22" />
                        </v-avatar>
                        <div class="pl-4">
                            <h6 class="text-subtitle-1 textSecondary mb-1">Profit</h6>
                            <h3 class="text-h6">$5,296</h3>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
