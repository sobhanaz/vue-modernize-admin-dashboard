<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';

import { getPrimary } from '@/utils/UpdateColors';

/**--Chart 1--**/
const chartoption1 = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 35,
            width: 100,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: [getPrimary.value],
         fill: {
            type: 'solid',
            opacity: 0.05
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const Chart1 = [
    {
        name: 'Customers',
        data: [30, 25, 35, 20, 30]
    }
];

/**--Chart 2--**/
const chartoption2 = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 35,
            width: 100,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: ['#ddd'],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.05
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const Chart2 = [
    {
        name: 'Customers',
        data: [30, 25, 35, 20, 30]
    }
];

/**--Chart 3--**/
const chartoption3 = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 35,
            width: 100,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: [getPrimary.value],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.05
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const Chart3 = [
    {
        name: 'Customers',
        data: [30, 25, 35, 20, 30]
    }
];

/**--Chart 4--**/
const chartoption4 = computed(() => {
    return {
        chart: {
            type: 'area',
            height: 35,
            width: 100,
            fontFamily: `inherit`,
            foreColor: '#a1aab2',
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: true
            },
            group: 'sparklines'
        },
        colors: ['#ddd'],
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'solid',
            opacity: 0.05
        },
        markers: {
            size: 0
        },
        tooltip: {
            enabled: false
        }
    };
});

const Chart4 = [
    {
        name: 'Customers',
        data: [30, 25, 35, 20, 30]
    }
];

const select = ref('March 2024');
const items = ref(['March 2024', 'April 2024', 'May 2024']);
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <div class="d-sm-flex align-center justify-space-between">
                <v-card-title class="text-h5">Product Performance</v-card-title>
                <div class="my-sm-0 my-2">
                    <v-select v-model="select" :items="items" variant="outlined" density="compact" hide-details></v-select>
                </div>
            </div>
            <v-table class="month-table mt-5 custom-px-0" border="1">
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-subtitle-1 font-weight-semibold">Product</th>
                            <th class="text-subtitle-1 font-weight-semibold">Progress</th>
                            <th class="text-subtitle-1 font-weight-semibold">Status</th>
                            <th class="text-subtitle-1 font-weight-semibold">Budget</th>
                            <th class="text-subtitle-1 font-weight-semibold">Growth</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="month-item">
                            <td>
                                <div class="d-flex align-center">
                                    <v-avatar size="48" rounded="md">
                                        <img src="/src/assets/images/products/s6.jpg" alt="icon" width="50"
                                    /></v-avatar>
                                    <div class="mx-3">
                                        <h4 class="text-subtitle-1 text-no-wrap font-weight-bold">Gaming Console</h4>
                                        <h6 class="text-subtitle-2 text-no-wrap textSecondary mt-1">Electronics</h6>
                                    </div>
                                </div>
                            </td>
                            <td><h5 class="font-weight-medium text-no-wrap text-body-1 textSecondary">78.5%</h5></td>
                            <td><v-chip rounded="md" class="ma-2 px-5 chip-label" color="success" size="small" label>Low</v-chip></td>
                            <td><h4 class="text-body-1">$3.9K</h4></td>
                            <td><apexchart type="area" height="35" width="95" :options="chartoption1" :series="Chart1"> </apexchart></td>
                        </tr>
                        <tr class="month-item">
                            <td>
                                <div class="d-flex align-center">
                                    <v-avatar size="48" rounded="md">
                                        <img src="/src/assets/images/products/s9.jpg" alt="icon" width="50"
                                    /></v-avatar>
                                    <div class="mx-3">
                                        <h4 class="text-subtitle-1 text-no-wrap font-weight-bold">Leather Purse</h4>
                                        <h6 class="text-subtitle-2 text-no-wrap textSecondary mt-1">Fashion</h6>
                                    </div>
                                </div>
                            </td>
                            <td><h5 class="font-weight-medium text-no-wrap text-body-1 textSecondary">58.6%</h5></td>
                            <td><v-chip rounded="md" class="ma-2 px-5 chip-label" color="warning" size="small" label>Medium</v-chip></td>
                            <td><h4 class="text-body-1">$3.5K</h4></td>
                            <td><apexchart type="area" height="35" width="95" :options="chartoption2" :series="Chart2"> </apexchart></td>
                        </tr>
                        <tr class="month-item">
                            <td>
                                <div class="d-flex align-center">
                                    <v-avatar size="48" rounded="md">
                                        <img src="/src/assets/images/products/s7.jpg" alt="icon" width="50"
                                    /></v-avatar>
                                    <div class="mx-3">
                                        <h4 class="text-subtitle-1 text-no-wrap font-weight-bold">Red Velvate Dress</h4>
                                        <h6 class="text-subtitle-2 text-no-wrap textSecondary mt-1">Womens Fashion</h6>
                                    </div>
                                </div>
                            </td>
                            <td><h5 class="font-weight-medium text-no-wrap text-body-1 textSecondary">25%</h5></td>
                            <td><v-chip rounded="md" class="ma-2 px-5 chip-label" color="primary" size="small" label>Very High</v-chip></td>
                            <td><h4 class="text-body-1">$3.5K</h4></td>
                            <td><apexchart type="area" height="35" width="95" :options="chartoption3" :series="Chart3"></apexchart></td>
                        </tr>
                        <tr class="month-item">
                            <td>
                                <div class="d-flex align-center">
                                    <v-avatar size="48" rounded="md">
                                        <img src="/src/assets/images/products/s4.jpg" alt="icon" width="50"
                                    /></v-avatar>
                                    <div class="mx-3">
                                        <h4 class="text-subtitle-1 text-no-wrap font-weight-bold">Headphone Boat</h4>
                                        <h6 class="text-subtitle-2 text-no-wrap textSecondary mt-1">Electronics</h6>
                                    </div>
                                </div>
                            </td>
                            <td><h5 class="font-weight-medium text-no-wrap text-body-1 textSecondary">96.3%</h5></td>
                            <td><v-chip rounded="md" class="ma-2 px-5 chip-label" color="error" size="small" label>High</v-chip></td>
                            <td><h4 class="text-body-1">$3.5K</h4></td>
                            <td><apexchart type="area" height="35" width="95" :options="chartoption4" :series="Chart4"> </apexchart></td>
                        </tr>
                    </tbody>
                </template>
            </v-table>
        </v-card-item>
    </v-card>
</template>
