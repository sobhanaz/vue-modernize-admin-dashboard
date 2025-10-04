<script setup lang="ts">
import { ref } from 'vue';
import visa from '@/assets/images/front-pages/payments/visa.svg';
import master from '@/assets/images/front-pages/payments/master.svg';
import ae from '@/assets/images/front-pages/payments/american-exp.svg';
import discover from '@/assets/images/front-pages/payments/discover.svg';
import paypal from '@/assets/images/front-pages/payments/paypal.svg';
import maestro from '@/assets/images/front-pages/payments/maesro.svg';
import jcb from '@/assets/images/front-pages/payments/jcb.svg';
import dinner from '@/assets/images/front-pages/payments/dinners-clb.svg';
const icons = ref([
    {
        img: visa
    },
    {
        img: master
    },
    {
        img: ae
    },
    {
        img: discover
    },
    {
        img: paypal
    },
    {
        img: maestro
    },
    {
        img: jcb
    },
    {
        img: dinner
    }
]);
</script>
<template>
    <v-container class="max-width-1218 pt-12">
        <h6 class="text-16 opacity-80 text-center pb-8 font-weight-medium">Secured payment with PayPal & Razorpay</h6>
        <div class="d-flex flex-wrap align-center ga-sm-12 ga-6 justify-center">
            <div v-for="item in icons" :key="item.img">
                <img :src="item.img" alt="icon" />
            </div>
        </div>
    </v-container>
</template>
