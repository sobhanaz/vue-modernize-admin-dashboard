<script setup lang="ts">
/*Call Components*/
import Topcards from '../dashboardComponents/modern/TopCards.vue';
import RevenueUpdates from '../dashboardComponents/modern/RevenueUpdates.vue';
import YearlyBreakup from '../dashboardComponents/modern/YearlyBreakup.vue';
import MonthlyEarnings from '../dashboardComponents/modern/MonthlyEarnings.vue';
import EmployeeSalary from '../dashboardComponents/modern/EmployeeSalary.vue';
import Customers from '../dashboardComponents/modern/Customers.vue';
import Projects from '../dashboardComponents/modern/Projects.vue';
import UserCard from '../dashboardComponents/modern/UserCard.vue';
import BestSellingProducts from '../dashboardComponents/modern/BestSellingProducts.vue';
import WeeklyStats from '../dashboardComponents/modern/WeeklyStats.vue';
import TopProjects from '../dashboardComponents/modern/TopProjects.vue';
import SnackBar from '@/components/dashboards/snackbar.vue';
</script>
<template>
    <!-- Loader -->
    <SnackBar />
    <!-- Loader -->

    <v-row>
        <!-- Top cards -->
        <v-col cols="12">
            <Topcards />
        </v-col>
        <v-col cols="12">
            <v-row>
                <!-- Revenue Updates -->
                <v-col cols="12" lg="8" md="12">
                    <RevenueUpdates />
                </v-col>
                <!-- Yearly Breakup / Monthly Earnings -->
                <v-col cols="12" lg="4" sm="12">
                    <v-row>
                        <v-col cols="12" lg="12" sm="6">
                            <YearlyBreakup />
                        </v-col>
                        <v-col cols="12" lg="12" sm="6">
                            <MonthlyEarnings />
                        </v-col>
                    </v-row>
                </v-col>
                <!-- Employee Salary -->
                <v-col cols="12" lg="4" md="4">
                    <EmployeeSalary />
                </v-col>
                <!-- Customers / Projects / Usercard -->
                <v-col cols="12" lg="4" md="4">
                    <v-row>
                        <v-col cols="12" sm="6">
                            <Customers />
                        </v-col>
                        <v-col cols="12" sm="6">
                            <Projects />
                        </v-col>
                        <v-col cols="12">
                            <UserCard />
                        </v-col>
                    </v-row>
                </v-col>
                <!--Best selling products-->
                <v-col cols="12" lg="4" md="4">
                    <BestSellingProducts />
                </v-col>
                <!-- Weekly Stats -->
                <v-col cols="12" lg="4" md="4">
                    <WeeklyStats />
                </v-col>
                <!-- Top Projects -->
                <v-col cols="12" lg="8" md="8">
                    <TopProjects />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
