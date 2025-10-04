<script setup lang="ts">
import { ref } from 'vue';
const textblock = ref([
    {
        title: 'founded',
        num: '2019',
        subtitle: 'When we founded Modernize'
    },
    {
        title: 'Growth',
        num: '1,400%',
        subtitle: 'Revenue growth in 2024'
    },
    {
        title: 'customers',
        num: '300k+',
        subtitle: 'Customers on Modernize'
    },
    {
        title: 'Dashboards',
        num: '25k+',
        subtitle: 'Dashboards built using Modernize'
    }
]);
</script>
<template>
    <div class="elevation-3">
        <v-container class="max-width-1218 py-0">
            <div class="space-p-96">
                <v-row class="d-flex justify-space-between">
                    <v-col cols="12" md="6" class="pe-lg-12">
                        <h2 class="display-2 font-weight-bold textPrimary">Key metric at a glance</h2>
                        <p class="text-16 opacity-70 lh-32 pe-lg-16 pt-3">
                            From the year we were founded to the impressive customer base we've built, and the growth percentages that
                            reflect our continuous improvement, these numbers tell our story at a glance. Explore the data that drives our
                            mission and underscores our commitment to excellence.
                        </p>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row>
                            <v-col cols="12" sm="6" v-for="item in textblock" :key="item.title">
                                <span class="text-uppercase text-primary text-13 font-weight-medium">{{ item.title }}</span>
                                <h2 class="text-48 font-weight-semibold textPrimary">{{ item.num }}</h2>
                                <p class="text-16 opacity-70 py-2">{{ item.subtitle }}</p>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>
