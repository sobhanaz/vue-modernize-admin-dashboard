<script setup lang="ts">
import { ref } from 'vue';

const textbank = ref('');
const textcno = ref('');
const textdate = ref('');
const textcvv = ref('');
</script>

<template>
    <v-card>
        <v-card-item class="py-4">
            <div class="d-flex align-center justify-space-between">
                <h4 class="text-18 font-weight-medium">Add Payment Card</h4>
                <v-btn color="transparent" variant="flat" icon @click="$emit('dialogcard')">
                    <XIcon stroke-width="1.5" width="20" />
                </v-btn>
            </div>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
            <v-radio-group inline>
                <v-radio label="Visa" color="primary" value="1"></v-radio>
                <v-radio label="MasterCard" color="secondary" value="2"></v-radio>
            </v-radio-group>
            <v-row>
                <v-col cols="12">
                    <v-text-field v-model="textbank" label="Bank" required color="primary" variant="outlined" hide-details></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-text-field
                        v-model="textcno"
                        label="Card Number"
                        required
                        color="primary"
                        variant="outlined"
                        hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                        v-model="textdate"
                        label="Expiry Date"
                        required
                        color="primary"
                        variant="outlined"
                        hide-details
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="textcvv" label="cvv" required color="primary" variant="outlined" hide-details></v-text-field>
                </v-col>
            </v-row>
            <v-radio-group inline class="mt-4">
                <v-radio label="Credit Card" color="primary" value="1"></v-radio>
                <v-radio label="Debit" color="secondary" value="2"></v-radio>
                <v-radio label="Net Banking" color="secondary" value="3"></v-radio>
            </v-radio-group>
        </v-card-text>
        <v-card-actions class="justify-end">
            <v-btn color="error" @click="$emit('dialogcard')">Cancel</v-btn>
            <v-btn color="primary" variant="flat" @click="$emit('dialogcard')">Submit</v-btn>
        </v-card-actions>
    </v-card>
</template>
