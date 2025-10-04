<script setup lang="ts">
import { ref } from 'vue';
// combo data
const items = ref([
    'The Dark Knight',
    'Control with Control',
    'Combo with Solo',
    'The Dark',
    'Fight Club',
    'demo@company.com',
    'Pulp Fiction'
]);
const value = ref('The Dark Knight');
const cap_value = ref('demo@company.com');
const cap_value2 = ref('demo@company.com');
const multi_value = ref(['The Dark Knight', 'Fight Club']);
</script>
<template>
    <v-autocomplete
        v-model="cap_value"
        :items="items"
        color="primary"
        label="Email Address"
        variant="outlined"
        hide-details
    ></v-autocomplete>

    <v-autocomplete v-model="cap_value2" :items="items" color="primary" label="Email Address" variant="outlined" hide-details class="mt-5">
        <template v-slot:prepend-inner>
            <MailIcon stroke-width="1.5" size="22" />
        </template>
    </v-autocomplete>
</template>
