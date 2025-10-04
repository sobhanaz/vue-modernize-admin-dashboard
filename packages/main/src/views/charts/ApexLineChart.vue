<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
import { getPrimary, getSecondary } from '@/utils/UpdateColors';
// theme breadcrumb
const page = ref({ title: 'Line Chart' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Line Chart',
        disabled: true,
        href: '#'
    }
]);
const chartOptions = computed(() => {
    return {
        chart: {
            height: 350,
            type: 'line',
            fontFamily: `inherit`,
            zoom: {
                type: 'x',
                enabled: true
            },
            toolbar: {
                show: false
            },
            shadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 1
            }
        },
        colors: [getPrimary.value, getSecondary.value],
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            title: {
                text: 'Month'
            }
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: 'straight',
            width: '2'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        },
        tooltip: {
            theme: 'dark',
            x: {
                format: 'dd/MM/yy HH:mm'
            }
        }
    };
});
const lineChart = {
    series: [
        {
            name: 'High - 2013',
            data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
            name: 'Low - 2013',
            data: [12, 11, 14, 18, 17, 13, 13]
        }
    ]
};
</script>

<template>
    <!-- ---------------------------------------------------- -->
    <!-- Line Chart -->
    <!-- ---------------------------------------------------- -->
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <UiParentCard title="Line Chart">
                <apexchart type="line" height="350" :options="chartOptions" :series="lineChart.series"> </apexchart>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
