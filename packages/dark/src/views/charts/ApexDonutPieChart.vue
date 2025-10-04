<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import { ref } from 'vue';

// common components
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
import UiChildCard from '@/components/shared/UiChildCard.vue';
// template breadcrumb
const page = ref({ title: 'Doughnut Chart' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Doughnut Chart',
        disabled: true,
        href: '#'
    }
]);

const theme = useTheme();


const donutchartOptions = computed(() => {
    return {
        chart: {
            type: 'donut',
            height: 300,
            fontFamily: `inherit`,
            foreColor: '#adb0bb'
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70px'
                }
            }
        },
        stroke: {
            width: 2,
            colors: 'rgba(var(--v-theme-surface))'
        },
        legend: {
            show: true,
            position: 'bottom',
            width: '50px'
        },
        colors: ['rgba(var(--v-theme-info))', 'rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-error))', 'rgba(var(--v-theme-success))', 'rgba(var(--v-theme-warning ))'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };
});

const donutChart = {
    series: [44, 55, 41, 17, 15]
};

const piechartOptions = computed(() => {
    return {
        chart: {
            type: 'pie',
            height: 300,
            fontFamily: `inherit`,
            foreColor: '#adb0bb',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70px'
                }
            }
        },
        legend: {
            show: true,
            position: 'bottom',
            width: '50px'
        },
        colors: ['rgba(var(--v-theme-info))', 'rgba(var(--v-theme-primary))', 'rgba(var(--v-theme-error))', 'rgba(var(--v-theme-success))', 'rgba(var(--v-theme-warning ))'],
        tooltip: {
            fillSeriesColor: false
        },
        stroke: {
            width: 2,
            colors: 'rgba(var(--v-theme-surface))'
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    };
});

const pieChart = {
    series: [44, 55, 13, 43, 22]
};
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12" lg="6">
                    <!-- ---------------------------------------------------- -->
                    <!-- Donut Chart -->
                    <!-- ---------------------------------------------------- -->
                    <UiChildCard title="Donut Chart">
                        <apexchart type="donut" height="300" :options="donutchartOptions" :series="donutChart.series"> </apexchart>
                    </UiChildCard>
                </v-col>
                <v-col cols="12" lg="6">
                    <!-- ---------------------------------------------------- -->
                    <!-- Pie Chart -->
                    <!-- ---------------------------------------------------- -->
                    <UiChildCard title="Pie Chart">
                        <apexchart type="pie" height="300" :options="piechartOptions" :series="pieChart.series"> </apexchart>
                    </UiChildCard>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
