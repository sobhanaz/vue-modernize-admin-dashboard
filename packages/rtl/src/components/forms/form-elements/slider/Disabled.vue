<script setup lang="ts">
import { ref } from 'vue';

const slider2 = ref(40);
</script>
<template>

        <v-slider v-model="slider2" hide-details color="primary" disabled></v-slider>

</template>
