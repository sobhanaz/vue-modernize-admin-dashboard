<script setup lang="ts">
import { ref } from 'vue';
const slider1 = ref(50);
</script>
<template>

        <v-slider v-model="slider1" hide-details color="primary" ></v-slider>

</template>
