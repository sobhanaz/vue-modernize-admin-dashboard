<script setup lang="ts">
import { ref } from 'vue';
const slider5 = ref(40);
</script>
<template>
    <v-slider class="mt-3" v-model="slider5" hide-details color="primary" step="1" thumb-label="always"></v-slider>
</template>