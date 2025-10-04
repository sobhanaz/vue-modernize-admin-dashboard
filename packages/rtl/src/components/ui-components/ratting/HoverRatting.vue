<script setup lang="ts">
import { ref } from "vue";
const rating5 = ref(3);
</script>
<template>
    <div>
        <v-rating v-model="rating5" color="warning" hover density="compact"></v-rating>
    </div>
</template>
