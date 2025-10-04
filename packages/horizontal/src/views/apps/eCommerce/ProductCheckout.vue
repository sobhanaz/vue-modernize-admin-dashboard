<script setup lang="ts">
import { ref } from 'vue';

import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import CartCheckout from '@/components/apps/ecommerce/cart/CartCheckout.vue';

const page = ref({ title: 'Checkout' });
const breadcrumbs = ref([
    {
        text: 'Ecommerce',
        disabled: false,
        href: '#'
    },
    {
        text: 'Checkout Page',
        disabled: true,
        href: '#'
    }
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <CartCheckout />
</template>
