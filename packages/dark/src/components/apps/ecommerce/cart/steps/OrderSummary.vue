<script setup lang="ts">
import { computed, onMounted, onUpdated, reactive, ref } from 'vue';
import { useEcomStore } from '@/stores/apps/eCommerce';

const store = useEcomStore();
onMounted(() => {
    store.getsubTotal();
    store.getTotal();
    store.getDiscount();
});

// const getSubtotal = computed(() => {
//     return store.subTotal;
// });
// const Subtotal = ref(getSubtotal);
// const Discount = reactive(Math.round(Subtotal.value * (5 / 100)));
// const total = reactive(getSubtotal.value - Discount);
</script>
<template>
    <v-card variant="outlined" class="my-3">
        <v-card-item>
            <h5 class="text-h5 mb-6">Order Summery</h5>

            <div class="d-flex align-center justify-space-between my-5">
                <h6 class="text-h6 font-weight-regular">Sub Total</h6>
                <h6 class="font-weight-semibold text-h6">${{ store.subTotal }}</h6>
            </div>

            <div class="d-flex align-center justify-space-between my-5">
                <h6 class="text-h6 font-weight-regular">Discount 5%</h6>
                <h6 class="font-weight-semibold text-h6 text-error">- ${{ store.discount }}</h6>
            </div>

            <div class="d-flex align-center justify-space-between my-5">
                <h6 class="text-h6 font-weight-regular">Shipping Charges</h6>
                <h6 class="font-weight-semibold text-h6">-</h6>
            </div>

            <div class="d-flex align-center justify-space-between my-5">
                <h6 class="text-h6">Total</h6>
                <h6 class="font-weight-semibold text-h5">${{ store.total }}</h6>
            </div>
        </v-card-item>
    </v-card>
</template>
