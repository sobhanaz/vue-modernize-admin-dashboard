
<script setup lang="ts">
import { ref } from 'vue';
const slider1 = ref(40);
const slider2 = ref(50);
const slider3 = ref(70);
const slider4 = ref(80);
const slider5 = ref(65);
</script>
<template>
    <div class="d-flex">
        <v-slider v-model="slider1" hide-details direction="vertical" color="primary"></v-slider>
        <v-slider v-model="slider2" hide-details direction="vertical" color="primary"></v-slider>
        <v-slider v-model="slider3" hide-details direction="vertical" color="primary"></v-slider>
        <v-slider v-model="slider4" hide-details direction="vertical" color="primary"></v-slider>
        <v-slider v-model="slider5" hide-details direction="vertical" color="primary" disabled></v-slider>
    </div>
</template>
