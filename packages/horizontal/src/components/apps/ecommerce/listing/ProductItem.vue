<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
    name: String,
    image: String,
    desc: String,
    rating: Number,
    salePrice: Number,
    offerPrice: Number,
    goto: Number || String || Object || Array
});
const successsnackbar = ref(false);
const rate = ref(props.rating);
</script>

<template>
    <v-card variant="outlined" class="rounded card-hover overflow-hidden">
        <router-link :to="`/ecommerce/product/detail/${goto}`">
            <img alt="product" :src="image" class="w-100" />
        </router-link>
        <div class="d-flex justify-end mr-3 mt-n6">
            <v-tooltip text="Add to Cart" location="bottom">
                <template v-slot:activator="{ props }">
                    <v-btn
                        icon
                        v-bind="props"
                        color="primary"
                        class="ml-auto"
                        size="x-small"
                        @click="$emit('handlecart', (successsnackbar = true))"
                        ><BasketIcon size="18"
                    /></v-btn>
                </template>
            </v-tooltip>
        </div>
        <v-card-item class="pt-1">
            <h6 class="text-h6">{{ name }}</h6>

            <div class="d-flex align-center justify-space-between mt-1">
                <div class="d-flex align-center gap-2">
                    <h6 class="text-h6">${{ salePrice }}</h6>
                    <p class="text-decoration-line-through text-medium-emphasis">${{ offerPrice }}</p>
                </div>
                <v-rating color="warning" half-increments size="small" v-model="rate" density="compact"> </v-rating>
            </div>
        </v-card-item>
        <v-snackbar variant="flat" location="top right" color="success" rounded="md" class="text-white" v-model="successsnackbar">
            Item Added to The Cart
        </v-snackbar>
    </v-card>
</template>
<style>
.descriptionH {
    height: 40px;
    overflow: hidden;
}
</style>
