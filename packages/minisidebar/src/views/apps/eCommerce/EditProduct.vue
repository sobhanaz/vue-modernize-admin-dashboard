<script setup>
import { ref } from 'vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import LeftSide from '@/components/apps/ecommerce/editproduct/LeftSide.vue';
import RightSide from '@/components/apps/ecommerce/editproduct/RightSide.vue';

const page = ref({ title: 'Edit Product' });
const breadcrumbs = ref([
    {
        text: 'Dashboard',
        disabled: false,
        href: '/'
    },
    {
        text: 'Edit Product',
        disabled: true,
        href: '#'
    }
]);
</script>
<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-row>
        <v-col cols="12" lg="9">
            <LeftSide/>
        </v-col>
        <v-col cols="12" lg="3">
            <RightSide/>
        </v-col>
    </v-row>
</template>