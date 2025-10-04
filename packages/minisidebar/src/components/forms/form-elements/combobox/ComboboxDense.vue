<script setup lang="ts">
import { ref } from "vue";
const values = ref('foo');
const items = ref(["Programming", "Design", "Vue", "Vuetify"]);
</script>
<template>
    <!-- ----------------------------------------------------------------------------- -->
    <!-- Dense -->
    <!-- ----------------------------------------------------------------------------- -->
    <div>
        <v-row>
            <v-col cols="12">
                <v-combobox v-model="values" :items="items" label="Default" hide-details></v-combobox>
            </v-col>
            <v-col cols="12">
                <v-combobox v-model="values" :items="items" density="comfortable" label="Comfortable"  hide-details></v-combobox>
            </v-col>
            <v-col cols="12">
                <v-combobox v-model="values" :items="items" density="compact" label="Compact"  hide-details></v-combobox>
            </v-col>
        </v-row>
    </div>
</template>


