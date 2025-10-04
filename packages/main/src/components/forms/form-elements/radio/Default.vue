<script setup lang="ts">
import { ref } from 'vue';
const radioGroup = ref('1');
</script>
<template>
    <div class="d-flex gap-3 align-center flex-column flex-sm-row">
        <v-radio-group inline hide-details v-model="radioGroup" class="d-flex justify-center ">
            <v-radio color="primary" value="1"></v-radio>
            <v-radio disabled color="primary" value="3"></v-radio>
            <v-radio color="primary" value="2"></v-radio>
        </v-radio-group>
    </div>
</template>
