<script setup lang="ts">
import { ref } from 'vue';
// icons
import { HelpIcon } from 'vue-tabler-icons';

/*Location Select*/
const select = ref('');
const location = ref(['Alaska', 'Arizona', 'Hawaii']);

const radioColumn = ref('1');
const radioInline = ref('1');
const paymentradio = ref('1');

const openpanel = ref([0]);
</script>
<template>
    <h5 class="text-h5 mb-6 mt-3">Collapsible Section</h5>
    <v-expansion-panels v-model="openpanel">
        <!---Delivery Address--->
        <v-expansion-panel elevation="10"  >
            <v-expansion-panel-title class="text-h6">Delivery Address</v-expansion-panel-title>
            <v-expansion-panel-text class="mt-4">
                <v-row>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">Full Name</v-label>
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="John Deo" hide-details />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">Phone No</v-label>
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="1340 2154 123" hide-details>
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-label class="font-weight-medium mb-2">Address</v-label>
                        <v-textarea
                            auto-grow
                            variant="outlined"
                            placeholder="150, Ring Road"
                            rows="2"
                            color="primary"
                            row-height="25"
                            shaped
                            hide-details
                        ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">Pincode</v-label>
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="120125" hide-details> </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">Landmark</v-label>
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="Nr.Wall Street" hide-details />
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">City</v-label>
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="Vadodara" hide-details> </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">State</v-label>
                        <v-select
                            v-model="select"
                            :items="location"
                            item-title="state"
                            item-value="abbr"
                            label="Select"
                            return-object
                            single-line
                            variant="outlined"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-label class="font-weight-medium mb-2">Address Type</v-label>
                        <v-radio-group v-model="radioColumn" inline class="ml-n3" hide-details>
                            <v-radio label="Home (All day delivery)" color="primary" value="1"></v-radio>
                            <v-radio label="Office (Delivery between 10 AM - 5 PM)" color="primary" value="2"></v-radio>
                        </v-radio-group>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <!---Delivery Options--->
        <v-expansion-panel elevation="10" class=" mt-3">
            <v-expansion-panel-title class="text-h6">Delivery Options</v-expansion-panel-title>
            <v-expansion-panel-text class="mt-4">
                <v-radio-group v-model="radioInline" inline hide-details class="ml-n3">
                    <v-radio label="Standard 3-5 Days" color="primary" value="1"></v-radio>
                    <v-radio label="Express" color="primary" value="2"></v-radio>
                    <v-radio label="Overnight" color="primary" value="3"></v-radio>
                </v-radio-group>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <!---Payment Method--->
        <v-expansion-panel elevation="10" class=" mt-3">
            <v-expansion-panel-title class="text-h6">Payment Method</v-expansion-panel-title>
            <v-expansion-panel-text class="mt-4">
                <v-radio-group v-model="paymentradio" inline hide-details class="ml-n3">
                    <v-radio label="Credit/Debit/ATM Card" color="primary" value="1"></v-radio>
                    <v-radio label="Cash on Delivery" color="primary" value="2"></v-radio>
                </v-radio-group>
                <v-row class="mt-4">
                    <v-col cols="12" md="8">
                        <v-label class="mb-2 font-weight-medium">Card Number</v-label>
                        <v-text-field color="primary" variant="outlined" type="text" placeholder="1250 4521 5630 1540" />
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-label class="mb-2 font-weight-medium">Name</v-label>
                                <v-text-field color="primary" variant="outlined" type="text" placeholder="John Deo" hide-details />
                            </v-col>
                            <v-col cols="12" md="3" sm="6">
                                <v-label class="mb-2 font-weight-medium">Exp. Date</v-label>
                                <v-text-field color="primary" variant="outlined" type="text" placeholder="MM/YY" hide-details />
                            </v-col>
                            <v-col cols="12" md="3" sm="6">
                                <v-label class="mb-2 font-weight-medium">CVV Code</v-label>
                                <v-text-field color="primary" variant="outlined" type="text" placeholder="456" hide-details>
                                    <template v-slot:append-inner>
                                        <HelpIcon stroke-width="1.5" size="22" class="text-medium-emphasis ml-3" />
                                    </template>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12">
                        <v-btn color="primary" flat>Submit</v-btn>
                        <v-btn class="bg-lighterror text-error ml-4" flat>Cancel</v-btn>
                    </v-col>
                </v-row>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
