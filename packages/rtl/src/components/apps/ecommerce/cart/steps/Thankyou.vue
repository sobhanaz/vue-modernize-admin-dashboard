<script setup lang="ts">
import { ref } from 'vue';
import completed from '@/assets/images/products/payment-complete.gif';
</script>

<template>
    <v-card>
        <v-card-item class="py-8 text-center">
            <h3 class="text-h3">Thank you for order!</h3>
            <p class="text-medium-emphasis mt-3 mb-2">We will send a process notification, before it delivered.</p>
            <p>Your order id: <span class="text-primary">dff796c4-1a08-5768-97e3-bd65d98b1559</span></p>
            <div class="text-center">
            <img :src="completed" alt="Thankyou" class="my-6" width="250" />
            </div>
            <small class="text-medium-emphasis"
                >If you have any query or questions regarding purchase items, then fell to get in contact us</small
            ><br />
            <span class="text-error">(555) 492-2175</span>
            <div class="d-sm-flex align-center justify-center gap-3 mt-5 mb-5">
                <v-btn color="primary" variant="tonal" to="/ecommerce/products">Continue to Shopping</v-btn>
                <v-btn color="primary" class="mt-4 mt-sm-0">Download Invoice</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
