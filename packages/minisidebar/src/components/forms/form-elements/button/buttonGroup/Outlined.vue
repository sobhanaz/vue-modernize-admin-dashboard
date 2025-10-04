<script setup lang="ts">
import { ref } from 'vue';
const toggle = ref(null);
</script>
<template>
    <div class="d-flex justify-center">
        <v-btn-toggle v-model="toggle" color="primary" variant="outlined">
            <v-btn icon="mdi-format-align-left"></v-btn>
            <v-btn icon="mdi-format-align-center"></v-btn>
            <v-btn icon="mdi-format-align-right"></v-btn>
            <v-btn icon="mdi-format-align-justify"></v-btn>
        </v-btn-toggle>
    </div>
</template>