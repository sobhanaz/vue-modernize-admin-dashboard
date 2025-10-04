<script setup>
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import LeftSide from '@/components/apps/ecommerce/addproduct/LeftSide.vue';
import RightSide from '@/components/apps/ecommerce/addproduct/RightSide.vue';

const page = ref({ title: 'Add Product' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'Add Product',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" lg="9" md="8">
            <LeftSide/>
        </v-col>
        <v-col cols="12" lg="3" md="4">
            <RightSide/>
        </v-col>
    </v-row>
</template>