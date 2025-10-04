<script setup lang="ts">
import { ref } from 'vue';
const colorChecked = ref(true);
// checks color data
const checksColor = ref(['primary', 'secondary', 'success', 'error', 'warning']);
</script>
<template>
    <div class="d-flex gap-3 justify-center align-center flex-column flex-sm-row">
        <v-checkbox-btn v-for="btn in checksColor" :key="btn" :color="btn" hide-details v-model="colorChecked"></v-checkbox-btn>
    </div>
</template>
