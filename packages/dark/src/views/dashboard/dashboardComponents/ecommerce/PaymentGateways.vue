<script setup lang="ts">
import { paymentGateways } from '@/_mockApis/components/dashboard/ecommerceData';
</script>
<template>
    <v-card elevation="10" >
        <v-card-item>
            <v-card-title class="text-h5">Payment Gateways</v-card-title>
            <v-card-subtitle class="text-subtitle-1 textSecondary">Platform For Income</v-card-subtitle>
            <div class="mt-sm-10 mt-5">
                <div class="d-flex align-center mt-6" v-for="list in paymentGateways" :key="list.title">
                    <v-avatar :class="'rounded-md bg-light' + list.bgcolor" size="40">
                        <img :src="list.img" :alt="list.img" width="25" />
                    </v-avatar>
                    <div class="pl-4 mt-n1">
                        <h5 class="text-h6">{{ list.title }}</h5>
                        <h6 class="text-subtitle-1 textSecondary mt-1">{{ list.subtitle }}</h6>
                    </div>
                    <div :class="'ml-auto font-weight-bold text-subtitle-1 text-medium-' + list.disable">{{ list.rank }}</div>
                </div>
                <v-btn class="mt-sm-15 mt-10" block variant="outlined" color="primary">View all transactions</v-btn>
            </div>
        </v-card-item>
    </v-card>
</template>
