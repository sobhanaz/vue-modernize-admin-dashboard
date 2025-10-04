<script setup lang="ts">
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import {pricing} from '@/_mockApis/components/pages/pricingData';
/* Breadcrumb text */
const page = ref({ title: 'Pricing' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '#'
    },
    {
        text: 'Pricing',
        disabled: true,
        href: '#'
    }
]);
/* Switch monthly/yearly pricing */
const priceplan = ref(false);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <h2 class="text-h2 text-center pt-10">
        Flexible Plans Tailored to Fit Your Community's <br />
        Unique Needs!
    </h2>
    <v-row class="justify-center mt-1 mb-sm-10 mb-5">
        <v-col cols="auto">
            <div class="d-flex justify-center">
                <v-label class="text-subtitle-1">Monthly</v-label>
                <v-switch color="primary" hide-details v-model="priceplan" class="mx-4"></v-switch>
                <v-label class="text-subtitle-1">Yearly</v-label>
            </div>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
        <v-col cols="12" md="4" sm="6" v-for="card in pricing" :key="card.caption">
            <v-card elevation="10" class="rounded-md pa-sm-8 pa-4">
                <div class="d-flex justify-space-between">
                    <h4 class="text-body-2 text-medium-emphasis text-uppercase mb-6" v-text="card.caption"></h4>
                    <v-chip v-if="card.tagtext" size="small" class="mt-sm-n4 font-weight-bold" color="warning">POPULAR</v-chip>
                </div>
                <img :src="card.image" width="90" alt="icon" />
                <div v-if="card.free" class="d-flex align-center mt-4">
                    <h2 class="display-1">Free</h2>
                </div>
                <div v-else class="d-flex align-center mt-4">
                    <sup class="text-h6 mt-n3 pr-2">$</sup>
                    <h2 v-if="priceplan" class="display-1">{{ card.yearlyprice }}</h2>
                    <h2 v-else class="display-1">{{ card.price }}</h2>
                    <span v-if="priceplan" class="text-medium-emphasis font-weight-medium mt-4 ml-2">/yr</span>
                    <span v-else class="text-medium-emphasis font-weight-medium mt-4 ml-2">/mo</span>
                </div>
                <v-list class="mb-0 pl-0 bg-transparent pt-5">
                    <v-list-item class="px-0" v-for="desc in card.list" :key="desc.listtitle">
                        <v-list-item-title v-if="desc.status"
                            class="text-body-1 d-flex align-center font-weight-medium text-medium-emphasis"
                        >
                            <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="2" size="18" class="mr-4" />
                            {{ desc.listtitle }}
                        </v-list-item-title>
                        <v-list-item-title  v-else
                            class="text-body-1 d-flex align-center font-weight-medium "
                        >
                            <component :is="desc.icon" :class="'text-' + desc.iconcolor" stroke-width="2" size="18" class="mr-4" />
                            {{ desc.listtitle }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
                <v-btn color="primary" size="large" class="mt-6" flat block>{{ card.buttontext }}</v-btn>
            </v-card>
        </v-col>
    </v-row>
</template>
