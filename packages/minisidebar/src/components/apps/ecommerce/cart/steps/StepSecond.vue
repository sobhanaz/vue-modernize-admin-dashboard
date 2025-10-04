<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AddressCard from './AddressCard.vue';
import AddAddress from './AddAddress.vue';
import { useEcomStore } from '@/stores/apps/eCommerce';
import OrderSummary from './OrderSummary.vue';

const store = useEcomStore();
onMounted(() => {
    store.fetchAddress();
});
const dialog = ref(false);
</script>

<template>
    <v-row>
        <div class="d-flex align-center justify-space-between  mt-8 w-100 px-3">
            <h4 class="text-h5">Billing Address</h4>
            <div class="">
                <v-btn size="small" color="primary" class="ml-auto" @click="dialog = true"><PlusIcon size="16" /> Add Address</v-btn>
                <AddAddress :dialog="dialog" @handledialog="dialog = false" />
            </div>
        </div>
        <v-col cols="12">
            <v-row>
                <v-col lg="4" md="4" cols="12" v-for="address in store.addresses" :key="address.id">
                    <AddressCard
                        :name="address.name"
                        :destination="address.destination"
                        :isDefault="address.isDefault"
                        :building="address.building"
                        :city="address.city"
                        :state="address.state"
                        :phone="address.phone"
                        :showBtn="true"
                    />
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12" lg="8">
            <div class="p-3">
                <OrderSummary />
            </div>
        </v-col>
        <v-col lg="4" cols="12" md="12">
            <div v-for="address in store.addresses" >
                <template v-if="address.isDefault">
                    <h5 class="text-h5 mb-4">Shipping Address</h5>
                    <AddressCard
                        :name="address.name"
                        :destination="address.destination"
                        :isDefault="address.isDefault"
                        :building="address.building"
                        :city="address.city"
                        :state="address.state"
                        :phone="address.phone"
                    />
                </template>
            </div>
        </v-col>
    </v-row>
</template>
