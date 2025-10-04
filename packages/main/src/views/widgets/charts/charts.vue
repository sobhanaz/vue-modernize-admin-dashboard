<script setup lang="ts">
import { ref } from 'vue';
/* Breadcrumb component */
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';

/*Call Components*/
import Followers from '@/components/widgets/charts/Followers.vue';
import Views from '@/components/widgets/charts/Views.vue';
import Earned from '@/components/widgets/charts/Earned.vue';
import TotalEarning from '@/components/widgets/charts/TotalEarning.vue';
import CurrentValue from '@/components/widgets/charts/CurrentValue.vue';
import MostVisited from '@/components/widgets/charts/MostVisited.vue';
import PageImpression from '@/components/widgets/charts/PageImpression.vue';
import YearlyBreakup from '../../dashboard/dashboardComponents/modern/YearlyBreakup.vue';
import MonthlyEarnings from '../../dashboard/dashboardComponents/ecommerce/MonthlyEarnings.vue';
import YearlySales from '../../dashboard/dashboardComponents/ecommerce/YearlySales.vue';
import RevenueUpdates from '../../dashboard/dashboardComponents/ecommerce/RevenueUpdates.vue';
import SalesOverview from '../../dashboard/dashboardComponents/ecommerce/SalesOverview.vue';
import Customers from "../../dashboard/dashboardComponents/modern/Customers.vue";
import Projects from "../../dashboard/dashboardComponents/modern/Projects.vue";

// theme breadcrumb
const page = ref({ title: 'Charts' });
const breadcrumbs = ref([
    {
        text: 'Home',
        disabled: false,
        href: '#'
    },
    {
        text: 'Charts',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>        
    <v-row>
        <!-- Followers Chart -->
        <v-col cols="12" sm="3">
            <Followers />
        </v-col>
        <!-- Views Chart -->
        <v-col cols="12" sm="3">
            <Views />
        </v-col>
        <!-- Earned Chart -->
        <v-col cols="12" sm="3">
            <Earned />
        </v-col>
        <!-- TotalEarning Chart -->
        <v-col cols="12" sm="3">
            <TotalEarning />
        </v-col>
        <!-- Current Value -->
        <v-col cols="12">
            <CurrentValue />
        </v-col>
        <v-col cols="12" md="4">
            <!-- Yearly Breakup -->
            <YearlyBreakup />
            <!-- Monthly Earnings -->
            <MonthlyEarnings />
            <!-- Most Visited -->
            <MostVisited />
        </v-col>
        <v-col cols="12" md="4">
            <!-- Yearly Sales -->
            <YearlySales />
            <!-- Page Impression -->
            <PageImpression />
            <v-row class="mt-3">
                <v-col cols="12" sm="6">
                    <Customers />
                </v-col>
                <v-col cols="12" sm="6">
                    <Projects />
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" md="4">
            <v-row>
                <!-- Revenue Updates -->
                <v-col cols="12">
                    <RevenueUpdates />
                </v-col>
                <!-- Sales Overview -->
                <v-col cols="12">
                    <SalesOverview />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
