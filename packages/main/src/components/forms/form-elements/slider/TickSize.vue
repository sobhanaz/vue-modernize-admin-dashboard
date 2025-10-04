<script setup lang="ts">
import { ref } from 'vue';
const slider6 = ref(40);
</script>
<template>
    <v-slider class="mt-3" v-model="slider6" tick-size="4" hide-details color="primary" step="10" show-ticks="always" thumb-label="always"></v-slider>
</template>
