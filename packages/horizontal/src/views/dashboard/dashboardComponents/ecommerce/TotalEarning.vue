<script setup lang="ts">
import { computed } from 'vue';

import { getPrimary } from '@/utils/UpdateColors';

/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 25,
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        colors: [getPrimary.value],
        grid: {
            show: false
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '100%',
                borderRadius: 3,
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 5,
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
        },
        responsive: [
            {
                breakpoint: 767,
                options: {
                    chart: { height: 60 },
                    plotOptions: {
                        bar: { columnWidth: "60%" }
                    }
                    
                }
            }
        ],
    };
});
const seriescolumnchart = [
    {
        name: '',
        data: [100, 60, 35, 90, 35, 100]
    }
];
</script>
<template>
    <v-card elevation="10">
        <v-card-item>
            <v-avatar class="rounded-md bg-lightprimary text-primary">
                <img src="@/assets/images/svgs/cart-icon.svg" alt="ico" />
            </v-avatar>
            <div class="my-5 ml-n4">
                <apexchart class="" type="bar" height="25" :options="chartOptions" :series="seriescolumnchart">
                </apexchart>
            </div>
            <div>
                <div class="d-flex">
                    <h4 class="text-h4 ">$16.5k</h4>
                    <div class="ml-1">
                        <ArrowUpRightIcon stroke-width="1.5" size="18" class="text-success" />
                    </div>
                </div>
                <div class="text-subtitle-1 textPrimary mt-1">Sales</div>
            </div>

        </v-card-item>
    </v-card>
</template>
