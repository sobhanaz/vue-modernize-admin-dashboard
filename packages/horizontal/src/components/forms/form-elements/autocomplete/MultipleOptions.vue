<script setup lang="ts">
import { ref } from 'vue';
const items2 = ref([
    'The Dark Knight',
    'Control with Control',
    'Combo with Solo',
    'The Dark',
    'Fight Club',
    'demo@company.com',
    'Pulp Fiction'
]);
const value = ref(['The Dark Knight']);
const multi_value = ref(['The Dark Knight', 'Fight Club']);
</script>

<template>
    <v-autocomplete
        v-model="multi_value"
        :items="items2"
        variant="outlined"
        color="primary"
        label="Outlined"
        multiple
        hide-details
        closable-chips
    >
        <template v-slot:chip>
            <v-chip label color="primary" size="large" class="mb-1 text-subtitle-1 font-weight-regular"></v-chip>
        </template>
    </v-autocomplete>
</template>
