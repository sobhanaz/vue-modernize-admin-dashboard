<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEcomStore } from '@/stores/apps/eCommerce';
import OrderSummaryVue from './OrderSummary.vue';
import AddressCard from './AddressCard.vue';
import AddCard from './AddCard.vue';


const payment = ref('paypal');
const dialog = ref(false);

const delivery = ref('free');

const store = useEcomStore();
const getCart = computed(() => {
    return store.cart;
});

</script>

<template>
    <v-row class="mt-5">
        <v-col cols="12" lg="9">
            <h5 class="text-h5 mb-4">Delivery Options</h5>
            <v-radio-group v-model="delivery" inline>
                <v-row>
                    <v-col cols="12 " sm="6">
                        <div class="py-5 px-4 border rounded-md">
                            <v-radio value="free" color="primary" class="label-op-1">
                                <template v-slot:label>
                                    <div>
                                        <h6 class="text-h6 mb-1">Standard Delivery (Free)</h6>
                                        <span class="d-block text-subtitle-1 font-weight-medium">Delivery on Monday 8 Jun</span>
                                    </div>
                                </template>
                            </v-radio>
                        </div>
                    </v-col>
                    <v-col cols="12 " sm="6">
                        <div class="py-5 px-4 border rounded-md">
                            <v-radio value="paid" color="primary" class="label-op-1">
                                <template v-slot:label>
                                    <div>
                                        <h6 class="text-h6 mb-1">Fast Delivery ($5.00)</h6>
                                        <span class="d-block text-subtitle-1 font-weight-medium">Delivery on Friday 5 Jun</span>
                                    </div>
                                </template>
                            </v-radio>
                        </div>
                    </v-col>
                </v-row>
            </v-radio-group>
            <h5 class="text-h5 mb-4">Payment Options</h5>
            <v-row>
                <v-col cols="12" lg="7">
                    <v-radio-group v-model="payment">
                        <div class="py-5 px-4 border rounded-md mb-6">
                            <v-radio value="paypal" color="primary" class="label-op-1">
                                <template v-slot:label>
                                    <div class="d-flex align-center w-100">
                                        <div>
                                            <h6 class="text-h6 mb-1">Pay with PayPal</h6>
                                            <span class="d-block text-subtitle-1 text-wrap"
                                                >You will be redirected to PayPal website to complete your purchase securely.</span
                                            >
                                        </div>
                                        <div class="ml-auto flex-shrink-0">
                                            <img src="@/assets/images/svgs/paypal.svg" width="40" alt="img" />
                                        </div>
                                    </div>
                                </template>
                            </v-radio>
                        </div>

                        <div class="py-5 px-4 border rounded-md mb-6">
                            <v-radio value="credit" color="primary" class="label-op-1">
                                <template v-slot:label>
                                    <div class="d-flex align-center w-100">
                                        <div>
                                            <h6 class="text-h6 mb-1">Credit/Debit Card</h6>
                                            <span class="d-block text-subtitle-1 text-wrap"
                                                >We support Mastercard, Visa, Discover and Stripe.</span
                                            >
                                        </div>
                                        <div class="ml-auto flex-shrink-0">
                                            <img src="@/assets/images/svgs/mastercard.svg" width="40" alt="img" />
                                        </div>
                                    </div>
                                </template>
                            </v-radio>
                        </div>

                        <!-- if credit is selected -->
                        <v-card elevation="0" class="mb-6 " variant="outlined" v-if="payment == 'credit'">
                            <v-card-item class="py-3">
                                <div class="d-flex align-center justify-space-between">
                                    <v-card-title class="text-subtitle-1">Add New Card</v-card-title>
                                    <v-btn variant="flat" color="primary" @click="dialog = true">
                                        <PlusIcon stroke-width="1.5" size="20" />
                                        Add Card
                                    </v-btn>
                                </div>
                            </v-card-item>
                            <v-divider></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col md="6" cols="12">
                                        <v-card elevation="0" class="object-card overflow-hidden">
                                            <v-card-text class="top-object">
                                                <div class="text-right mb-2">
                                                    <img src="@/assets/images/svgs/mastercard.svg" alt="img" />
                                                </div>
                                                <h6 class="text-white text-medium-emphasis text-h5">**** **** **** 2599</h6>
                                                <div class="d-flex align-center justify-space-between mt-3">
                                                    <div>
                                                        <span class="text-medium-emphasis text-white text-subtitle-2 opacity-50"
                                                            >Expire Date</span
                                                        >
                                                        <span
                                                            class="text-medium-emphasis text-white text-subtitle-2 opacity-50 mt-1 d-block"
                                                            >05/24</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <span class="text-medium-emphasis text-white text-subtitle-2 opacity-50">CVV</span>
                                                        <span
                                                            class="text-medium-emphasis text-white text-subtitle-2 opacity-50 mt-1 d-block"
                                                            >085</span
                                                        >
                                                    </div>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                    <v-col md="6" cols="12">
                                        <v-card elevation="0" class="object-card object-secondary overflow-hidden">
                                            <v-card-text class="top-object">
                                                <div class="text-right mb-2 mt-3">
                                                    <img src="@/assets/images/svgs/paypal.svg" alt="img" />
                                                </div>
                                                <h6 class="text-white text-medium-emphasis text-h5 mt-4">**** **** **** 2599</h6>
                                                <div class="d-flex align-center justify-space-between mt-3">
                                                    <div>
                                                        <span class="text-medium-emphasis text-white text-subtitle-2 opacity-50"
                                                            >Expire Date</span
                                                        >
                                                        <span
                                                            class="text-medium-emphasis text-white text-subtitle-2 opacity-50 mt-1 d-block"
                                                            >05/24</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <span class="text-medium-emphasis text-white text-subtitle-2 opacity-50">CVV</span>
                                                        <span
                                                            class="text-medium-emphasis text-white text-subtitle-2 opacity-50 mt-1 d-block"
                                                            >085</span
                                                        >
                                                    </div>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>

                        <div class="py-5 px-4 border rounded-md mb-6">
                            <v-radio value="cash" color="primary" class="label-op-1">
                                <template v-slot:label>
                                    <div class="d-flex align-center w-100">
                                        <div>
                                            <h6 class="text-h6 mb-1">Cash on Delivery</h6>
                                            <span class="d-block text-subtitle-1 text-wrap"
                                                >Pay with cash when your order is delivered.</span
                                            >
                                        </div>
                                    </div>
                                </template>
                            </v-radio>
                        </div>
                    </v-radio-group>
                </v-col>
                <v-col cols="12" lg="5" class="d-flex align-center">
                    <img src="@/assets/images/products/payment.svg" alt="paymenttype" />
                    <!-- Modal -->
                    <v-dialog v-model="dialog" max-width="550">
                        <AddCard @dialogcard="dialog = false" />
                    </v-dialog>
                </v-col>

                
            </v-row>
        </v-col>
        <v-col lg="3" cols="12">
            <h5 class="text-h5">Cart Item</h5>
            <div class="d-flex align-center gap-2 my-3" v-for="item in getCart" :key="item.name">
                <img alt="product" class="rounded-md custom-img-box" :src="item.image" />
                <div class="ma-2">
                    <h6 class="text-h6">{{ item.name }}</h6>
                    <span class="text-subtitle-1">${{ item.salePrice * item.qty }}</span>
                </div>
            </div>
            <OrderSummaryVue />
            <div v-for="address in store.addresses" :key="address.id">
                <div v-if="address.isDefault">
                    <AddressCard
                        :name="address.name"
                        :destination="address.destination"
                        :isDefault="address.isDefault"
                        :building="address.building"
                        :city="address.city"
                        :state="address.state"
                        :phone="address.phone"
                        :showBtn="false"
                    />
                </div>
            </div>
        </v-col>
    </v-row>
</template>
<style lang="scss">
.object-card {
    position: relative;
    background-color: rgba(var(--v-theme-primary), 0.9);
    &.object-secondary {
        background-color: rgba(var(--v-theme-secondary), 0.9);
        &:before {
            background-color: rgb(var(--v-theme-secondary200));
        }
        &:after {
            background-color: rgb(var(--v-theme-darksecondary));
        }
        .top-object {
            &::after {
                background-color: rgb(var(--v-theme-secondary));
            }
        }
    }
    &:before {
        content: '';
        position: absolute;
        background-color: rgb(var(--v-theme-primary200));
        width: 60px;
        height: 60px;
        border-radius: 50%;
        right: -20px;
        bottom: 0px;
    }
    &::after {
        content: '';
        position: absolute;
        background-color: rgb(var(--v-theme-darkprimary));
        width: 60px;
        height: 60px;
        border-radius: 50%;
        right: 12px;
        bottom: -30px;
    }
}

.top-object {
    &::after {
        content: '';
        position: absolute;
        background-color: rgb(var(--v-theme-primary));
        width: 75px;
        height: 75px;
        border-radius: 50%;
        top: -25px;
        left: -25px;
    }
}
html .label-op-1 label {
    opacity: 1 !important;
}
</style>
