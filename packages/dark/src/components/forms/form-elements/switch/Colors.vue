<script setup lang="ts">
import { ref } from 'vue';
const model3 = ref(true);
// switch color data
const switchColor = ref(['primary', 'secondary', 'success', 'error', 'warning']);
</script>
<template>
    <div class="d-flex justify-center">
        <div class="d-flex gap-4 justify-center align-center flex-column flex-wrap flex-xl-nowrap flex-sm-row fill-height">
            <v-switch v-for="btn in switchColor" :key="btn" :color="btn" :model-value="true"  hide-details></v-switch>
        </div>
    </div>
</template>
