<script setup lang="ts">
// assets
import imageEmpty from '@/assets/images/products/empty-shopping-cart.svg';
//import imageDarkEmpty from '@/assets/images/e-commerce/empty-dark.svg';
</script>

<template>
    <v-row class="justify-center">
        <v-col class="text-center" lg="6">
            <v-img :src="imageEmpty" alt="cover" width="300px" class="mx-auto mt-5 mb-5" />
            <h5 class="text-h5">Cart is Empty</h5>
            <v-btn class="mt-3" to="/ecommerce/products" variant="flat" color="primary">Go Back to Shopping</v-btn>
        </v-col>
    </v-row>
</template>
