<script setup lang="ts">
import { ref } from 'vue';
const checkbox = ref(true);
const checkbox2 = ref(false);
const checkbox3 = ref(false);
const checkbox4 = ref(false);
</script>
<template>
    <div class="d-flex gap-3 justify-center  align-center flex-column flex-sm-row">
        <v-checkbox-btn color="primary" label="Primary" hide-details v-model="checkbox"></v-checkbox-btn>
        <v-checkbox-btn color="primary" label="Secondary" hide-details v-model="checkbox2"></v-checkbox-btn>
        <v-checkbox-btn color="primary" label="Success" v-model="checkbox3" hide-details></v-checkbox-btn>
        <v-checkbox-btn color="primary" label="Warning" hide-details v-model="checkbox4"></v-checkbox-btn>
    </div>
</template>
