<script setup lang="ts">
import { ref } from 'vue';
const select = ref('select');
const gender = ref(['Male', 'Female']);
const inline = ref(null);
const country = ref(['USA', 'United Kingdom', 'India', 'Srilanka']);
</script>
<template>
    <v-row>
        <v-col cols="12" lg="12">
            <v-alert variant="tonal" type="warning" color="primary" class="mb-6"> Person Info </v-alert>

            <v-row>
                <v-col cols="12" md="6">
                    <v-label class="mb-2 font-weight-medium">First Name</v-label>
                    <v-text-field variant="outlined" color="primary"></v-text-field>
                    <v-label class="mb-2 font-weight-medium">Select Gender</v-label>
                    <v-select :items="gender" item-title="gender" item-value="abbr" return-object single-line variant="outlined"></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-label class="mb-2 font-weight-medium">Last Name</v-label>
                    <v-text-field variant="outlined" color="primary"></v-text-field>
                    <v-label class="mb-2 font-weight-medium">Date of Birth</v-label>
                    <v-text-field color="primary" variant="outlined" type="date" ></v-text-field>
                </v-col>
            </v-row>
            <v-label class="mb-2 font-weight-medium">Membership</v-label>
            <v-radio-group v-model="inline" inline>
                <v-radio label="Free" value="radio-1" color="primary"></v-radio>
                <v-radio label="Paid" value="radio-2" color="primary"></v-radio>
            </v-radio-group>
            <!---Address--->
            <v-alert variant="tonal" type="warning" color="primary" class="mb-6"> Address </v-alert>
            <v-row>
                <v-col cols="12">
                    <v-label class="mb-2 font-weight-medium">Street</v-label>
                    <v-text-field variant="outlined" color="primary" hide-details></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-label class="mb-2 font-weight-medium">City</v-label>
                    <v-text-field variant="outlined" color="primary"></v-text-field>
                    <v-label class="mb-2 font-weight-medium">Post Code</v-label>
                    <v-text-field variant="outlined" color="primary"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-label class="mb-2 font-weight-medium">State</v-label>
                    <v-text-field variant="outlined" color="primary"></v-text-field>
                    <v-label class="mb-2 font-weight-medium">Country</v-label>
                    <v-select
                        :items="country"
                        item-title="country"
                        item-value="abbr"
                        return-object
                        single-line
                        variant="outlined"
                    ></v-select>
                </v-col>
            </v-row>
            
            <v-btn color="error" class="mr-3">Cancel</v-btn>
            <v-btn color="primary">Submit</v-btn>
        </v-col>
    </v-row>
</template>
