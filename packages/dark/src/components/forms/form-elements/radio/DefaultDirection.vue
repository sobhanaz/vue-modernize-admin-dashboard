<script setup lang="ts">
import { ref } from 'vue';
const radioColumn = ref('1');
</script>
<template>
    <div class="d-flex gap-3 align-center flex-column flex-sm-row">
        <v-radio-group  hide-details v-model="radioColumn" column>
            <v-radio label="Option 1" color="primary" value="1"></v-radio>
            <v-radio label="Option 2" color="primary" value="2"></v-radio>
        </v-radio-group>
    </div>
</template>
