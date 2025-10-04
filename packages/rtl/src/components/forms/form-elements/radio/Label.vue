<script setup lang="ts">
import { ref } from 'vue';
const radioGroup3 = ref('1');
</script>
<template>
    <div class="d-flex  align-center flex-column flex-sm-row">
        <v-radio-group hide-details v-model="radioGroup3" inline class="d-flex gap-3 justify-center">
            <v-radio label="Primary" color="primary" value="1"></v-radio>
            <v-radio label="Secondary" color="primary" value="2"></v-radio>
            <v-radio label="Success" color="primary" value="3"></v-radio>
            <v-radio label="Warning" color="primary" value="4"></v-radio>
        </v-radio-group>
    </div>
</template>
