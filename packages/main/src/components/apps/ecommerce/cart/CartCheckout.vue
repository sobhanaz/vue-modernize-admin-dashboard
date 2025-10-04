<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEcomStore } from '@/stores/apps/eCommerce';
import StepFirst from './steps/StepFirst.vue';
import StepSecond from './steps/StepSecond.vue';
import Payment from './steps/Payment.vue';
import Thankyou from './steps/Thankyou.vue';
import { BasketIcon } from 'vue-tabler-icons';

const store = useEcomStore();
const thankyou = ref(false);

const getCart = computed(() => {
    return store.cart;
});
const tab = ref('tab-1');
function changeTab(e: string) {
    tab.value = e;
}
</script>
<template>
    <v-card variant="outlined">
        <v-card-text>
            <v-tabs v-model="tab" color="primary" class="customTab">
                <v-tab value="tab-1" rounded="md" class="mb-3 text-left me-4" height="70">
                    <span class="round-40 rounded-circle bg-grey100 d-flex justify-center align-center me-3 icon">
                        <BasketIcon stroke-width="1.5" width="20" />
                    </span>

                    <div>
                        <div class="text-h6">Item Cart</div>
                        <span class="text-subtitle-2 textSecondary font-weight-medium d-block">Product Summary</span>
                    </div>
                </v-tab>
                <v-tab value="tab-2" rounded="md" class="mb-3 text-left me-4" height="70" :disabled="store.cart.length < 1">
                    <span class="round-40 rounded-circle bg-grey100 d-flex justify-center align-center me-3 icon">
                        <FileDescriptionIcon stroke-width="1.5" width="20" />
                    </span>
                    <div>
                        <div class="text-h6">Billing</div>
                        <span class="text-subtitle-2 textSecondary font-weight-medium d-block"> Billing Information </span>
                    </div>
                </v-tab>

                <v-tab value="tab-3" rounded="md" class="mb-3 text-left" height="70" :disabled="store.cart.length < 1">
                    <span class="round-40 rounded-circle bg-grey100 d-flex justify-center align-center me-3 icon">
                        <CreditCardIcon stroke-width="1.5" width="20" />
                    </span>
                    <div>
                        <div class="text-h6">Payment</div>
                        <span class="text-subtitle-2 textSecondary font-weight-medium d-block"> Add & Update Card </span>
                    </div>
                </v-tab>
            </v-tabs>
            <v-window v-model="tab">
                <v-window-item value="tab-1" class="pa-1">
                    <StepFirst />
                    <v-row class="mt-3">
                        <v-col cols="12" sm="6">
                            <v-btn color="primary" variant="tonal" to="/ecommerce/products">Continue Shopping</v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" class="text-sm-right">
                            <v-btn color="primary" @click="changeTab('tab-2')" v-if="store.cart.length >= 1">CheckOut</v-btn>
                        </v-col>
                    </v-row>
                </v-window-item>
                <v-window-item value="tab-2" class="pa-1">
                    <StepSecond />
                    <v-row class="mt-3">
                        <v-col cols="6">
                            <v-btn color="primary" variant="tonal" @click="changeTab('tab-1')">Back</v-btn>
                        </v-col>
                        <v-col cols="6" class="text-right">
                            <v-btn color="primary" @click="changeTab('tab-3')">Place an Order</v-btn>
                        </v-col>
                    </v-row>
                </v-window-item>
                <v-window-item value="tab-3" class="pa-1">
                    <Payment />
                    <v-row class="mt-3">
                        <v-col cols="12" sm="6">
                            <v-btn color="primary" variant="tonal" @click="changeTab('tab-2')">Back</v-btn>
                        </v-col>
                        <v-col cols="12" sm="6" class="text-sm-right">
                            <v-btn color="primary" @click="thankyou = true">Complete an Order</v-btn>
                            <!-- Modal -->
                            <v-dialog v-model="thankyou" max-width="750">
                                <Thankyou />
                            </v-dialog>
                        </v-col>
                    </v-row>
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>
<style lang="scss">
.customTab {
    min-height: 68px;
}
</style>
