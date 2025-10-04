<script setup lang="ts">
import { ref } from 'vue';
const radioGroup3 = ref('1');
</script>
<template>
    <div class="d-flex justify-center align-center flex-column flex-sm-row">
        <v-radio-group hide-details v-model="radioGroup3" inline class="d-flex gap-3 justify-center">
            <v-radio label="Option 1" color="primary" value="1"></v-radio>
            <v-radio label="Option 2" color="primary" value="2"></v-radio>
            <v-radio label="Option 3" color="primary" value="3"></v-radio>
            <v-radio label="Option 4" color="primary" value="4"></v-radio>
            <v-radio label="Option 5" color="primary" value="5"></v-radio>
            <v-radio label="Option 6" color="primary" value="6"></v-radio>
            <v-radio label="Option 7" color="primary" value="7"></v-radio>
            <v-radio label="Option 8" color="primary" value="8"></v-radio>
        </v-radio-group>

    </div>
</template>
