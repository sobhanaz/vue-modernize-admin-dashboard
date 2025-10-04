<script setup lang="ts">
import { ref } from "vue";
const rules = ref([
    (value: { size: number }) =>
        !value || value.size < 2000000 || "Avatar size should be less than 2 MB!",
]);
</script>
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- FileInputs Validation -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-file-input :rules="rules" accept="image/png, image/jpeg, image/bmp" placeholder="Pick an avatar"
            prepend-icon="mdi-camera" variant="outlined" label="Avatar" hide-details="auto"></v-file-input>
    </div>
</template>

 
