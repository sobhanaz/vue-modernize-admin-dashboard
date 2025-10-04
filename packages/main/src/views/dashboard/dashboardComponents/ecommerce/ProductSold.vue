<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
const theme = useTheme();
const success = theme.current.value.colors.success;
/* Chart */
const chartOptions = computed(() => {
    return {
        chart: {
            type: 'bar',
            height: 85,
            width:'100%',
            stacked: true,
            stackType: '100%',
            fontFamily: `inherit`,
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            }
        },
        colors: [getPrimary.value,getSecondary.value, "#EAEFF4"],
        grid: {
            show: false,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "50%",
                borderRadius: [3],
                borderRadiusApplication: 'around',
                borderRadiusWhenStacked: 'around',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: false,
            width:1 ,
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
           
        { breakpoint: 1025, options: { chart: { height:150,width:250 } } }
        ],
    };

});
const seriescolumnchart = [
    {
        name: "",
        data: [25,35,20,25,40,25],
    },
    {
        name: "",
        data: [35,40,20,35,40,35],
    },
    {
        name: "",
        data: [40,25,60,40,20,40],
    },
];

</script>
<template>
    <v-card elevation="10">
        <v-card-item class="pb-7">
            <h4 class="text-h4 text-no-wrap">$65,432</h4>
            <h6 class="text-subtitle-1 textSecondary mt-1">Sales</h6>  
            <div class="ml-n2">
               <apexchart class="mt-5 salechart" type="bar" height="85" :options="chartOptions" :series="seriescolumnchart">
                </apexchart>      
            </div> 
        </v-card-item>
    </v-card>
</template>


<style type="text/css">
.salechart .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path {
  clip-path: inset(0 0 5% 0 round 20px);
}
</style>